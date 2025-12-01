import { toc as mdastToc } from "mdast-util-toc"
import { remark } from "remark"
import { visit } from "unist-util-visit"
import type { Node } from "unist"
import type { Root, Link, List, ListItem } from "mdast"

const textTypes = ["text", "emphasis", "strong", "inlineCode"] as const

function flattenNode(node: Node): string {
  const p: string[] = []
  visit(node, (node: Node) => {
    if (!textTypes.includes(node.type as any)) return
    if ('value' in node && typeof node.value === 'string') {
      p.push(node.value)
    }
  })
  return p.join('')
}

interface Item {
  title: string
  url: string
  items?: Item[]
}

interface Items {
  items?: Item[]
}

function getItems(node: Node | undefined, current: Partial<Item>): Items {
  if (!node) {
    return {}
  }

  if (node.type === "paragraph") {
    visit(node, (item: Node) => {
      if (item.type === "link" && 'url' in item) {
        current.url = (item as Link).url
        current.title = flattenNode(node)
      }

      if (item.type === "text") {
        current.title = flattenNode(node)
      }
    })

    return current as Items
  }

  if (node.type === "list") {
    const listNode = node as List
    current.items = listNode.children.map((i) => getItems(i, {}) as Item)

    return current as Items
  } else if (node.type === "listItem") {
    const listItemNode = node as ListItem
    const heading = getItems(listItemNode.children[0], {})

    if (listItemNode.children.length > 1) {
      getItems(listItemNode.children[1], heading)
    }

    return heading
  }

  return {}
}

const getToc = () => (node: Root, file: any) => {
  const table = mdastToc(node)
  const items = getItems(table.map, {})

  file.data = items
}

export type TableOfContents = Items

export async function getTableOfContents(
  content: string | undefined
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content)

  return result.data as TableOfContents
}

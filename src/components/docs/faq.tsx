'use client'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export const Faq = () => {
  const questions = [
    {
      question: 'What is the default landing page?',
      answer: (
        <>
          If no slug is provided, the site falls back to the <code>introduction</code> page.
        </>
      ),
    },
    {
      question: 'How can I customize the visual theme and colors?',
      answer: (
        <>
          Colors can be customized by editing the CSS variables in <code>src/app/globals.css</code>.
          The file defines design tokens for both light and dark themes. You can also change the
          base color from Tailwind CSS in <code>components.json</code>.
        </>
      ),
    },
    {
      question: 'Is the sidebar collapsible?',
      answer: (
        <>
          Yes, the sidebar can be toggled using the menu icon or the <code>CMD/CTRL + B</code>{' '}
          keyboard shortcut. Its state is persisted across sessions.
        </>
      ),
    },
    {
      question: 'What component library is used?',
      answer: (
        <>
          The project uses unstyled components from <code>shadcn/ui</code>, which you can find in{' '}
          <code>src/components/ui</code>.
        </>
      ),
    },
    {
      question: 'How do I add icons to the project?',
      answer: (
        <>
          The project uses <code>lucide-react</code> for most icons and <code>react-icons</code> for
          social icons like GitHub and Discord. You can import any icon from these libraries and
          use it in your components.
        </>
      ),
    },
    {
      question: 'What are content collections?',
      answer: (
        <>
          LiteDocs uses <code>content-collections</code> to manage and parse the MDX files from the{' '}
          <code>src/content</code> directory. The configuration in{' '}
          <code>content-collections.ts</code> defines how content is processed, including code
          highlighting and slug generation.
        </>
      ),
    },
  ]

  return (
    <Accordion type="multiple" defaultValue={[questions[0].question]} className="not-prose border-y">
      {questions.map((item, id) => (
        <AccordionItem key={id} value={item.question}>
          <AccordionTrigger>
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

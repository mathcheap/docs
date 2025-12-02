import Link from "next/link";

const CustomLink = (props: any) => {
  const { href, noBasePath, ...rest } = props;

  if (href.startsWith("#")) {
    return <a href={href} {...rest} />;
  }

  if (noBasePath) {
    return <a href={href} {...rest} />;
  }

  if (!href.startsWith("/")) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        {...rest}
      />
    );
  }

  return <Link href={href} {...rest} />;
};

export default CustomLink;

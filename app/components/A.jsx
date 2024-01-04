"use client";

export default function A({ children, link, ...rest }) {
  return (
    <a href={link} {...rest}>
      {children}
    </a>
  );
}

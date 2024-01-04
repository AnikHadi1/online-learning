"use client";

export default function ATag({ children, link }) {
  return <a href={link}>{children}</a>;
}

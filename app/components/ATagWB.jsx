"use client";

export default function ATagWB({ children, link }) {
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  );
}

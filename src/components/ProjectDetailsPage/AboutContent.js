"use client";

export default function AboutContent({ description }) {
  return (
    <div className="">
      {description && (
        <div
          className="prose prose-sm sm:prose-base prose-invert text-slate-300 max-w-none 
                       prose-p:leading-relaxed prose-headings:text-slate-100 prose-a:text-sky-400 hover:prose-a:text-sky-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}

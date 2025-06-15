export default function Loading() {
  return (
    // Full-screen container that centers the loader
    <div className="z-10 inset-0 flex items-center min-h-screen w-full justify-center">
      <div className="flex gap-4">
        {/*
          Each dot uses the 'animate-jump' utility class from our Tailwind config.
          We apply an inline 'animationDelay' to create the staggered, wave-like effect.
        */}
        <div
          className="w-5 h-5 bg-[#ff0088] rounded-full animate-jump"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-5 h-5 bg-[#ff0088] rounded-full animate-jump"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-5 h-5 bg-[#ff0088] rounded-full animate-jump"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}

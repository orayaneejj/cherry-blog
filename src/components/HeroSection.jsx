import authorImage from "/src/assets/author-image.jpg";
export function HeroSection() {
  return (
    <main className="py-8 px-7 md:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-6">
        <div className="text-center lg:text-right max-w-sm">
          <h1 className="text-3xl font-semibold">
            Stay <br className="hidden md:inline" />
            Informed,
            <br className="hidden md:inline" /> <br className="md:hidden" />
            Stay Inspired
          </h1>
          <p className="mt-4 text-[#75716B]">
            Join me in uncovering the magic of storytelling and the art of
            filmmaking.
          </p>
        </div>

        <div className="max-w-sm">
          <img
            src={authorImage}
            alt="Person with a cat"
            className="object-cover rounded-lg h-[530px]"
          />
        </div>

        <div className="max-w-sm">
          <div className="mb-4">
            <p className="text-xs text-[#75716B]">-Author</p>
            <h3 className="text-2xl font-semibold">Thompson P.</h3>
          </div>
          <div className="text-[#75716B] space-y-4">
            <p>
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
            <p>
              When I'm not writing, I spend time volunteering at my local animal
              shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

import authorImage from "/src/assets/author-image.jpg";
export function AuthorCard({ author }) {
  return (
    <div className="bg-[#EFEEEB] rounded-3xl md:p-6 md:w-72 p-4">
      <div className="flex items-center mb-4">
        <img
          src={authorImage}
          alt="Thompson P."
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-sm text-gray-600">Author</p>
          <h3 className="text-2xl font-bold">Thompson P.</h3>
        </div>
      </div>
      <div className="text-gray-600 space-y-4">
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p>
          When I'm not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}

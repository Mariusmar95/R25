import { useState } from "react";

function Testimonials() {
  return (
    <div className="border border-blu rounded w-full h-60">
      <h1 className="bg-black">What they say</h1>
      <div className="flex">
        <div className="">
          <img className="w-20" src=".././../public/instagram.svg" alt="" />
          <img className="w-20" src=".././../public/instagram.svg" alt="" />
          <img className="w-20" src=".././../public/instagram.svg" alt="" />
          <img className="w-20" src=".././../public/instagram.svg" alt="" />
        </div>

        <div className="bg-red-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            numquam architecto modi velit, vel itaque pariatur voluptate
            assumenda perspiciatis. Alias laboriosam ipsam odio tempora.
            Officiis dolore consectetur obcaecati nostrum eum? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Nemo qui corrupti
            voluptate natus iusto eos beatae at ex. Mollitia error amet deserunt
            sapiente a nihil beatae sit rerum voluptate molestiae.
          </p>
          <div className="flex justify-end bg-blue-500 border">
            <p>sadskagdhsagdaskhd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import React, { useEffect, useState } from 'react';
import gambar1 from '../assets/kode1.png';
import gambar2 from '../assets/kode2.png';
import gambar3 from '../assets/kode3.png';
import gambar4 from '../assets/kode4.png';
import gambar5 from '../assets/kode5.png';
import gambar6 from '../assets/kode6.png';

function Content() {
  const [posts, setPosts] = useState([]);

  const images = [gambar1, gambar2, gambar3, gambar4, gambar5, gambar6];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section id="content" className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto mb-10">
        <p className="text-sm text-teal-700 font-semibold uppercase">Update</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          Apa yang baru di Petani Kode? 🔥
        </h2>
        <p className="text-gray-600 mt-2">
          Baca artikel terbaru yang masih fresh dan hangat.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="rounded-xl bg-white text-gray-800 shadow p-6 border border-gray-200"
          >
            <img
              src={images[index]}
              alt={`Tutorial ${index + 1}`}
              className="w-full h-36 object-cover rounded-lg mb-4"
            />
            <div className="text-sm font-semibold text-gray-500 mb-2">
              Tutorial {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-sm leading-relaxed">{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Content;

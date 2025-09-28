
import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center py-20 h-[55rem] bg-[url('https://images.pexels.com/photos/27268733/pexels-photo-27268733.jpeg')]"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto text-center relative z-10 text-white mt-48 ">
        <h2 className="text-4xl font-bold mb-4">Welcome to Your To-Do App</h2>
        <p className="text-xl mb-8">  Organize your tasks efficiently and stay on top of your goals!</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Task
        </button>
      </div>
    </section>
  );
};

export default Hero;













// import React from 'react';

// function Hero() {
//   return (
//     <div className="bg-gray-900 text-white py-8 text-center  flex items-center justify-center">
//       <div>
//         <h1 className="text-4xl font-extrabold mb-4">Welcome to Your To-Do App</h1>
//         <p className="text-lg max-w-md mx-auto">
//           Organize your tasks efficiently and stay on top of your goals!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;
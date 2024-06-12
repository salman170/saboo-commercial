import React from "react";

const ModalYoutube = ({ open, setOpenYoutube, data }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container")
      setOpenYoutube((prev) => ({ ...prev, open: false }));
  };

  if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed  inset-0 flex items-center justify-center z-40  backdrop-blur-[3px] bg-black bg-opacity-50"
    >
      <div className="border   bg-[#f5f5f2] p-6 lg:py-10 text-center w-full max-w-lg rounded-2xl relative ">
        {data && (
          <div className="">
            <iframe
              width="560"
              height="315"
              src={data.url}
              title={data.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-96 rounded-xl"
              allowFullScreen
            ></iframe>
            <h1 className="pb-2 mt-4 text-xl font-semibold text-primary">
              {data.title}
            </h1>
            <p className="text-sm text-gray-600">{data.description}</p>
          </div>
        )}
        <button
          onClick={() => setOpenYoutube((prev) => ({ ...prev, open: false }))}
          className="absolute w-10 h-10 text-3xl text-white rounded-full -top-2 -right-2 bg-primary"
        >
          &times;
        </button>
        {/* <button onClick={() => setOpenYoutube(false)}>Close</button> */}
      </div>
    </div>
  );
};

export default ModalYoutube;

const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title w-full flex justify-center px-4">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
        className={`${className} border-4 sm:border-[.5vw] text-center sm:text-nowrap opacity-0 max-w-full`}
      >
        <div
          className="pb-3 sm:pb-4 md:pb-5 px-3 sm:px-6 md:px-10 lg:px-14 pt-2 sm:pt-3 md:pt-0"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;

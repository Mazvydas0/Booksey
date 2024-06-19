import * as React from "react";

function Logo() {
  return <div className="border-2 border-solid border-stone-900">Logo</div>;
}

function ContactInfo() {
  return (
    <section className="flex flex-col justify-center self-stretch w-full text-base leading-6 text-center bg-white text-stone-900">
      <div className="flex gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0155a0bd6f51ae992c76a913b2767418ceff4a1491b00cb008ee4504e249f09?apiKey=fac2a0e7815a47019cb2ba3ce35fe8ab&"
          alt="Phone icon"
          className="shrink-0 my-auto aspect-square w-[19px]"
        />
        <div>(111) 3434 3434</div>
      </div>
      <div className="flex gap-2 mt-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94486798bb8797f99d55ca4ac63ab42f0705dd52f96d73f10a48b749dbe01882?apiKey=fac2a0e7815a47019cb2ba3ce35fe8ab&"
          alt="Location icon"
          className="shrink-0 w-6 aspect-square"
        />
        <div>Washington Dc, Some address, Usa</div>
      </div>
    </section>
  );
}

function NavigationItem({ text, iconSrc }) {
  return (
    <div
      className={`mt-4 text-stone-900 ${
        iconSrc ? "flex gap-1.5 justify-center px-px whitespace-nowrap" : ""
      }`}
    >
      <div>{text}</div>
      {iconSrc && (
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="shrink-0 my-auto aspect-[1.79] fill-stone-900 w-[9px]"
        />
      )}
    </div>
  );
}

export default function Hamburger() {
  return (
    <div className="flex flex-col items-start p-5 text-sm bg-white max-w-[403px]">
      <header className="flex gap-5 justify-between self-stretch text-3xl font-bold leading-8 text-white whitespace-nowrap">
        <Logo />
        <div className="shrink-0 my-auto w-10 h-[31px]" />
      </header>
      <nav>
        <NavigationItem text="Home" />
        <NavigationItem text="About us" />
        <NavigationItem
          text="Services"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c3703747ccb70f58fb6e523dd1496db6f87335960933f0367f26edf549c04b?apiKey=fac2a0e7815a47019cb2ba3ce35fe8ab&"
        />
        <NavigationItem/>
      </nav>
      <ContactInfo />
      <section className="flex gap-4 justify-between self-stretch py-1 mt-5 text-base font-semibold leading-6 text-center">
        <button className="justify-center px-5 py-2.5 text-white whitespace-nowrap bg-stone-900">
          Register
        </button>
        <button className="justify-center px-5 py-2.5 border-2 border-solid bg-white bg-opacity-0 border-stone-900 text-stone-900">
          Sign in
        </button>
      </section>
    </div>
  );
}


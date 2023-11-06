"use client";

import { useState, useEffect, useRef } from "react";
import Dictionary from "./(main)/Dictionary/Dictionary";
import { Header } from "./(main)/Header/Header";
import Popup from "./(main)/Popup/Popup";

export default function Main() {
  const [popup, setPopup] = useState(false);
  const popupRef = useRef("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const toggleOpen = () => {
    setPopup((value) => !value);
  };

  useEffect(() => {
    function closeOnOverlay(evt) {
      if (evt.target.contains(popupRef.current)) {
        setPopup(false);
      }
    }

    if (popup) {
      document.addEventListener("mousedown", closeOnOverlay);

      return () => {
        document.removeEventListener("mousedown", closeOnOverlay);
      };
    }
  }, [popup]);

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setPopup(false);
      }
    }

    if (popup) {
      document.addEventListener("keydown", closeByEscape);

      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [popup]);

  const handleSave = (value) => {
    if (value.name) {
      setName(value.name);
    }
    if (value.avatar) {
      setAvatar(value.avatar);
    }
  };

  return (
    <>
      <Header toggleOpen={toggleOpen} name={name} avatar={avatar} />
      <Dictionary />
      {popup && (
        <Popup innerRef={popupRef} onSave={handleSave} setPopup={setPopup} />
      )}
    </>
  );
}

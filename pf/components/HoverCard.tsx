/*
    code taken and modified from https://www.youtube.com/watch?v=joDhIH6Xumw
*/
import React, { useState } from "react";
import styles from "../styles/card.module.css";

interface Content {
  title: string;
  subtitle: string;
}
class HoverCard extends React.Component<Content> {
  title: Element | null | undefined;
  subtitle: Element | null | undefined;
  complete!: Boolean;

  // componentWillReceiveProps(nextProps: Content) {
  //   console.log("hello");
  //   if (this.title) this.title.innerHTML = nextProps.title;
  //   if (this.subtitle) {
  //     this.subtitle.innerHTML = "";
  //     this.createSubtitle(nextProps.subtitle);
  //   }
  // }
  componentDidMount() {
    if (!this.complete) {
      this.title = document.getElementById("card-title");
      this.title
        ? (this.title.innerHTML = this.props.title)
        : console.log("title not found");
      this.subtitle = document.getElementById("card-subtitle");
      this.subtitle
        ? this.createSubtitle(this.props.subtitle)
        : console.log("subtitle not found");
      this.complete = true;
    }
  }
  createWord = (text: String, index: number) => {
    const word: HTMLElement = document.createElement("span");

    word.innerHTML = `${text} `;

    word.className = styles.cardSubtitleWord;

    // let ws = document.querySelector<HTMLElement>('.card-subtitle-word');
    word.style.transitionDelay = `${index * 40}ms`;

    return word;
  };

  addWord = (text: String, index: number) =>
    this.subtitle?.appendChild(this.createWord(text, index));

  createSubtitle = (text: String) => text.split(" ").map(this.addWord);
  render() {
    return (
      <div className="relative h-full">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p
              id="card-title"
              className={`${styles.cardTitle} font-atkinson_bolditalic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl`}
            ></p>
            <p
              id="card-subtitle"
              className={`${styles.cardSubtitle} font-atkinson_regular text-lg mt-2`}
            ></p>
          </div>
        </div>
      </div>
    );
  }
}
export default HoverCard;

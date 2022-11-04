/*
    code taken and modified from https://www.youtube.com/watch?v=joDhIH6Xumw
*/
import React from "react";

interface Content {
  title: string;
  subtitle: string;
}
class HoverCard extends React.Component<Content> {
  title: Element | undefined;
  subtitle: Element | undefined;
  complete: Boolean | undefined;
  componentDidMount() {
    if (!this.complete) {
      this.title = document.getElementsByClassName("card-title")[0];
      this.title.innerHTML = this.props.title;
      this.subtitle = document.getElementsByClassName("card-subtitle")[0];
      this.createSubtitle(this.props.subtitle);
      this.complete = true;
    }
  }
  createWord = (text: String, index: number) => {
    const word: HTMLElement = document.createElement("span");

    word.innerHTML = `${text} `;

    word.classList.add("card-subtitle-word");

    // let ws = document.querySelector<HTMLElement>('.card-subtitle-word');
    word.style.transitionDelay = `${index * 40}ms`;

    return word;
  };

  addWord = (text: String, index: number) =>
    this.subtitle?.appendChild(this.createWord(text, index));

  createSubtitle = (text: String) => text.split(" ").map(this.addWord);
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p className="card-title font-anek font-extrabold text-3xl"></p>
          <p className="card-subtitle font-anek text-lg mt-2"></p>
        </div>
      </div>
    );
  }
}
export default HoverCard;

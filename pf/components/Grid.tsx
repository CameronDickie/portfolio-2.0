/* 
    I cannot get this to work properly with animejs and react.
    having import errors. however, if react-animejs ever gets updated, 
    Code taken from https://www.youtube.com/watch?v=bAwEj_mSzOs
*/
import React from "react";

import styles from "../styles/grid.module.css";

class Grid extends React.Component {
  complete!: Boolean;
  columns!: number;
  rows!: number;

  wrapper: HTMLElement | undefined | null;

  colors: Array<String> = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
  ];

  count: number = -1;
  handleOnClick = (index: number) => {
    this.count = this.count + 1;
  };
  createTile = (index: number) => {
    const tile: HTMLElement = document.createElement("div");

    tile.className = styles.tile;

    tile.onclick = (e) => this.handleOnClick(index);

    return tile;
  };

  createTiles = (quantity: number) => {
    if (this.wrapper == null || this.wrapper == undefined) return;
    Array.from(Array(quantity)).map((tile, index) => {
      this.wrapper?.appendChild(this.createTile(index));
    });
  };

  createGrid = () => {
    if (this.wrapper == null || this.wrapper == undefined) {
      console.log("unable to get grid container");
    } else {
      this.wrapper.innerHTML = "";
      this.columns = Math.floor(document.body.clientWidth / 50);
      this.rows = Math.floor(document.body.clientHeight / 50);

      this.createTiles(this.columns * this.rows);
    }
  };
  componentDidMount() {
    if (!this.complete) {
      this.wrapper = document.getElementById("tiles");
      this.columns = Math.floor(document.body.clientWidth / 50);
      this.rows = Math.floor(document.body.clientHeight / 50);

      window.onresize = () => this.createGrid();
      this.createTiles(this.columns * this.rows);

      this.complete = true;
    }
  }
  render() {
    return <div id="tiles" className={styles.tiles}></div>;
  }
}

export default Grid;

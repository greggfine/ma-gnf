import styles from "./canvas.module.scss";
import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const stringStartingPoint = 11;
    const stringEndingPoint = 290;
    const fretStartingPoint = 11;
    const fretEndingPoint = 139;
    const canvas = canvasRef.current;
    if (canvas) {
      const c = canvas.getContext("2d") as CanvasRenderingContext2D;
      c.clearRect(0, 0, 3000, 3000);
      c.beginPath();
      c.moveTo(stringStartingPoint, 12);
      c.lineTo(stringEndingPoint, 12);
      c.stroke();
      c.beginPath();
      c.moveTo(stringStartingPoint, 37);
      c.lineTo(stringEndingPoint, 37);
      c.stroke();
      c.beginPath();
      c.moveTo(stringStartingPoint, 62);
      c.lineTo(stringEndingPoint, 62);
      c.stroke();
      c.beginPath();
      c.moveTo(stringStartingPoint, 87);
      c.lineTo(stringEndingPoint, 87);
      c.stroke();
      c.beginPath();
      c.moveTo(stringStartingPoint, 112);
      c.lineTo(stringEndingPoint, 112);
      c.stroke();
      c.beginPath();
      c.moveTo(stringStartingPoint, 138);
      c.lineTo(stringEndingPoint, 138);
      c.stroke();
      c.beginPath();
      c.moveTo(12, fretStartingPoint);
      c.lineTo(12, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(35, fretStartingPoint);
      c.lineTo(35, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(58, fretStartingPoint);
      c.lineTo(58, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(81, fretStartingPoint);
      c.lineTo(81, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(104, fretStartingPoint);
      c.lineTo(104, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(127, fretStartingPoint);
      c.lineTo(127, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(150, fretStartingPoint);
      c.lineTo(150, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(173, fretStartingPoint);
      c.lineTo(173, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(196, fretStartingPoint);
      c.lineTo(196, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(219, fretStartingPoint);
      c.lineTo(219, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(243, fretStartingPoint);
      c.lineTo(243, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(266, fretStartingPoint);
      c.lineTo(266, fretEndingPoint);
      c.stroke();
      c.beginPath();
      c.moveTo(289, fretStartingPoint);
      c.lineTo(289, fretEndingPoint);
      c.stroke();
      c.moveTo(293, fretStartingPoint);
      c.lineTo(293, fretEndingPoint);
      c.stroke();

      c.beginPath();
      c.arc(232, 75, 5, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.arc(185, 75, 5, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.arc(138, 75, 5, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.arc(93, 75, 5, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.arc(24, 50, 5, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.arc(24, 100, 5, 0, 2 * Math.PI);
      c.fill();
    }
  }, []);

  return <canvas className={styles.Canvas} ref={canvasRef}></canvas>;
};

export default Canvas;

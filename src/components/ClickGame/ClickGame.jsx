import React, { useEffect, useRef, useState } from "react";
import "./ClickGame.css";

function getCoordinates() {
  const xCoordinate = Math.floor(Math.random() * 530);
  const yCoordinate = Math.floor(Math.random() * 230);

  return { xCoordinate, yCoordinate };
}

const defaultCoordinates = { x: 0, y: 0 };

const ClickGame = () => {
  const [delay, setDelay] = useState(0.5);
  const [gameStart, setGameStart] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [record, setRecord] = useState([]);
  const timeref = useRef(null);

  const intervalRef = useRef(null);

  function handleDelayChange(e) {
    setDelay(e.target.value);
  }

  useEffect(() => {
    if (!timerStarted) return;

    timeref.current = Date.now();

    intervalRef.current = setInterval(
      () => {
        const { xCoordinate, yCoordinate } = getCoordinates();
        setCoordinates({
          x: xCoordinate,
          y: yCoordinate,
        });
      },
      (delay || 0.5) * 1000,
    );

    return () => clearInterval(intervalRef.current);
  }, [timerStarted, delay]);

  function handleStart() {
    setGameStart(true);
    setTimerStarted(true);
    const { xCoordinate, yCoordinate } = getCoordinates();
    setCoordinates({
      x: xCoordinate,
      y: yCoordinate,
    });
  }

  function handlePause() {
    setTimerStarted(false);
  }

  function handleReset() {
    setGameStart(false);
    setTimerStarted(false);
    setCoordinates(defaultCoordinates);
    setRecord([]);
  }

  function handleGameClick(isClickedInsideBox) {
    if (!gameStart || !timerStarted) return;
    // console.log(e.currentTarget);
    // const rect = e.currentTarget.getBoundingClientRect();

    // const x = e.clientX - rect.left;
    // const y = e.clientY - rect.top;
    // const currentX = coordinates.x;
    // const currentY = coordinates.y;

    // console.log({ x, y, currentX, currentY });
    const currentTime = Date.now();

    const diff = currentTime - timeref.current;

    timeref.current = currentTime;

    if (isClickedInsideBox) {
      setRecord((prev) => [...prev, { diff, inside: true }]);
    } else {
      setRecord((prev) => [...prev, { diff }]);
    }
    // if (
    //   x >= currentX &&
    //   x <= currentX + 20 &&
    //   y >= currentY &&
    //   y <= currentY + 20
    // ) {
    //   setRecord((prev) => [...prev, { diff, inside: true }]);
    // } else {
    //   setRecord((prev) => [...prev, { diff }]);
    // }
  }

  return (
    <div className="main-container">
      <h1>Box Game</h1>
      <div className="game-container">
        <div className="header">
          <input
            type="number"
            step="0.1"
            min="0.1"
            name="delayInput"
            id="delayInput"
            value={delay}
            onChange={handleDelayChange}
          />
          <button type="button" onClick={handleStart} disabled={timerStarted}>
            Start
          </button>
          <button type="button" onClick={handlePause} disabled={!timerStarted}>
            Pause
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="game-area" onClick={() => handleGameClick()}>
          <div
            className="box"
            style={{
              top: coordinates.y,
              left: coordinates.x,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleGameClick(true)
            }}
          />
        </div>
        <div className="record">
          <div className="table-container">
            <table className="record-table" border={"1"}>
              <thead>
                <tr>
                  <th>Mouse Click Number</th>
                  <th>Reaction Time</th>
                </tr>
              </thead>

              <tbody>
                {record.map((rec, index) => (
                  <tr key={index} className={rec.inside ? "inside" : ""}>
                    <td>{index + 1}</td>
                    <td>{(rec.diff / 1000).toFixed(2)}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickGame;

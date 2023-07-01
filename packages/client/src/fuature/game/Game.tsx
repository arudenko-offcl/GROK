import { useEffect, useState } from 'react';

import { MenuGame } from './components';
import { Pause } from '@phosphor-icons/react';
import styles from './Game.module.scss';
import { useSceneCanvas } from './scene';

type GameT = {};

export const Game: React.FC<GameT> = () => {
  const [status, setStatus] = useState<'pause' | 'end' | 'geme_over'>('pause');
  const canvasRef = useSceneCanvas();

  const ALL_LAVEL = 10;

  const [menu, setMenu] = useState(false);
  const [end, setEnd] = useState(false);
  const [lavel, setLavel] = useState(0);
  const [count, setCount] = useState(100500);

  const handleOpenPause = () => {
    setMenu(true);
    setStatus('pause');
  };

  const handleCloseMenu = () => {
    setEnd(false);
    setMenu(false);
  };

  const handleOnNext = () => {
    setLavel((prev) => prev + 1);
    setMenu(false);
    setEnd(true);
  };

  const handleOnRestart = () => {
    setMenu(false);
  };

  return (
    <div className={styles.Game}>
      <div className={styles.Pause} onClick={handleOpenPause}>
        <Pause size={32} />
      </div>
      <canvas ref={canvasRef} />
      {menu && (
        <MenuGame
          onClose={handleCloseMenu}
          open={menu}
          end={end}
          count={count}
          status={status}
          onRestart={handleOnRestart}
          onNext={handleOnNext}
        />
      )}
    </div>
  );
};

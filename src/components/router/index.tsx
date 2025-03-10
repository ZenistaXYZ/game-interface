import { Routes, Route } from 'react-router-dom';
import StartScreen from '../../pages/start-screen';
import GameScreen from '../../pages/game-screen';
import FarmingSimScreen from '../../pages/farming-sim';
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/farming-sim" element={<FarmingSimScreen />} />
        </Routes>
    );
}

export default AppRouter;

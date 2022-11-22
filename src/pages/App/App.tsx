import { VscGithubAlt } from 'react-icons/vsc';
import Stats from '@/components/Stats';
import { Locale } from '@/components/Locale';
import ws from '@/data/ws.json';
import stats from '@/data/stats.json';
import Logo from '../../assets/logo.png';
import './App.scss';

function App() {
    return (
        <>
            <header className="border-b-2 py-4 bg-black">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-start">
                            <img className="w-32 h-8" src={Logo} alt="Deriv" />
                            <h3 className="text-white font-medium flex flex-col align-start ml-3">
                                <Locale alias="title"/>
                                <span className="text-xs text-gray-500">
                                    <Locale alias="url" />
                                </span>
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <a href="https://github.com/binary-com/deriv-app" target="_blank" rel="noreferrer">
                                <VscGithubAlt size="1.6em" color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="app-hero container mx-auto p-24 my-14 flex items-center justify-center bg-black text-white text-center rounded-md">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-64 mb-6" src={Logo} alt="Deriv" />
                    <h1 className="text-4xl mb-3 text-white">Styles Analyze Report</h1>
                    <span className="text-xl text-white">app.deriv.com</span>
                </div>
            </div>
            <Stats data={ws} stats={stats} />
        </>
    );
}

export default App;

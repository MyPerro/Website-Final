import { DotLottiePlayer, Controls, PlayerEvents } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
export default function Loader(){
    return(
        <div className='flex flex-col justify-center items-center h-[100vh]' id='preloaded'>
            <div className='h-[10vh]'>
            <DotLottiePlayer src="preloader.json" loop autoplay />
            </div>
        </div>
    );
}
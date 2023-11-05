import { Hero } from '@/components/home';
import { IS_BROWSER } from '@/config/constants';

export default function Home() {
  // const [isContentShowing, setIsContentShowing] = useState(() => {
  //   if (IS_BROWSER && !localStorage.getItem('new-visitor')) {
  //     localStorage.setItem('new-visitor', 'true');
  //     return false;
  //   }
  //   return true;
  // });

  return (
    <div className="flex flex-column bg-black">
      <div className="h-screen w-screen flex items-start grow justify-start pt-7">
        <Hero /* onAnimationEnd={() => setIsContentShowing(true)}  */ />
      </div>
      {/* {isContentShowing && (
        <Stack direction="column" spacing="8rem" px={['1rem', '2.4rem', '4rem', null, '16rem']} mb="8rem">
          <Skills />
          <Projects />
        </Stack>
      )} */}
    </div>
  );
}

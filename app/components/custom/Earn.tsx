import TypewriterTicker from "../magicui/typewriter-effect";
import { NumberTicker } from "../magicui/number-ticker";

export default function Example() {
  return (
    <div className="w-full max-w-sm  mx-auto md:max-w-7xl flex flex-col items-center space-y-6 p-4 sm:p-6 md:p-8">
      <TypewriterTicker />
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-12 w-full">
        <div className="flex flex-col items-center sm:items-start">
          <NumberTicker
            value={45000}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-bold"
            style={{ color: '#862828' }}
          />
          <p className="text-gray-700 text-base sm:text-lg mt-2 text-center sm:text-left">Клиенты</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <NumberTicker
            value={27}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-bold"
            style={{ color: '#862828' }}
          />
          <p className="text-gray-700 text-base sm:text-lg mt-2 text-center sm:text-left">Партнёры</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <NumberTicker
            value={40000}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-bold"
            style={{ color: '#862828' }}
          />
          <p className="text-gray-700 text-base sm:text-lg mt-2 text-center sm:text-left">Отзывы</p>
        </div>
      </div>
    </div>
  );
}
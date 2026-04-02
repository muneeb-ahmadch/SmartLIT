import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Bell } from "lucide-react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Slider } from "./ui/slider";

const CLIMATE_MIN_TEMP = 16;
const CLIMATE_MAX_TEMP = 32;
const CLIMATE_VIEWBOX_SIZE = 320;
const CLIMATE_CENTER = CLIMATE_VIEWBOX_SIZE / 2;
const CLIMATE_RADIUS = 118;
const CLIMATE_TRACK_WIDTH = 18;
const CLIMATE_START_ANGLE = 135;
const CLIMATE_END_ANGLE = 405;
const CLIMATE_SWEEP = CLIMATE_END_ANGLE - CLIMATE_START_ANGLE;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function temperatureToProgress(temp: number) {
  return (clamp(temp, CLIMATE_MIN_TEMP, CLIMATE_MAX_TEMP) - CLIMATE_MIN_TEMP) /
    (CLIMATE_MAX_TEMP - CLIMATE_MIN_TEMP);
}

function progressToTemperature(progress: number) {
  return Math.round(
    CLIMATE_MIN_TEMP +
      clamp(progress, 0, 1) * (CLIMATE_MAX_TEMP - CLIMATE_MIN_TEMP),
  );
}

function temperatureToAngle(temp: number) {
  return (
    CLIMATE_START_ANGLE + temperatureToProgress(temp) * CLIMATE_SWEEP
  );
}

function unwrapDialAngle(angle: number) {
  const candidates = [angle - 360, angle, angle + 360];

  const closestAngle = candidates.reduce((best, candidate) => {
    const bestDistance =
      best < CLIMATE_START_ANGLE
        ? CLIMATE_START_ANGLE - best
        : best > CLIMATE_END_ANGLE
          ? best - CLIMATE_END_ANGLE
          : 0;
    const candidateDistance =
      candidate < CLIMATE_START_ANGLE
        ? CLIMATE_START_ANGLE - candidate
        : candidate > CLIMATE_END_ANGLE
          ? candidate - CLIMATE_END_ANGLE
          : 0;

    return candidateDistance < bestDistance ? candidate : best;
  }, candidates[0]);

  return clamp(closestAngle, CLIMATE_START_ANGLE, CLIMATE_END_ANGLE);
}

function pointToDialAngle(x: number, y: number) {
  const rawAngle = (Math.atan2(y - CLIMATE_CENTER, x - CLIMATE_CENTER) * 180) / Math.PI;
  return unwrapDialAngle(rawAngle);
}

function angleToTemperature(angle: number) {
  return progressToTemperature((angle - CLIMATE_START_ANGLE) / CLIMATE_SWEEP);
}

function polarToCartesian(angle: number, radius = CLIMATE_RADIUS) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: CLIMATE_CENTER + radius * Math.cos(radians),
    y: CLIMATE_CENTER + radius * Math.sin(radians),
  };
}

function describeArc(startAngle: number, endAngle: number, radius = CLIMATE_RADIUS) {
  const start = polarToCartesian(startAngle, radius);
  const end = polarToCartesian(endAngle, radius);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

const showcaseSlides = [
  {
    id: "climate",
    eyebrow: "Everyday comfort",
    title: "Climate",
    description:
      "Refined climate control keeps each room comfortable without asking for attention.",
  },
  {
    id: "entertainment",
    eyebrow: "Unified media",
    title: "Entertainment",
    description:
      "Music, streaming, and media sources appear through one clear interface, ready in seconds.",
  },
  {
    id: "sources",
    eyebrow: "Daily atmosphere",
    title: "Lighting Scenes",
    description:
      "Lighting scenes shape mood, arrival, and evening rhythm while keeping the interface visually quiet.",
  },
] as const;

const unifiedControlBackground =
  "https://www.marantz.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Library-Sites-marantz_northamerica_shared/default/dw89e6dbb6/Collection_Images/Whats-New-LP/whats-new-lp_mainbanner-thin-desktop.jpg?sw=2160";

const entertainmentTracks = [
  {
    album: "Album Name",
    artist: "Artist Name",
    title: "Song Name",
    duration: 230,
    artworkTitle: "CHILL",
    artworkSubtitle: "DYSTOPIA",
    artworkGradient: "from-[#d98d8b] via-[#673963] to-[#253f67]",
  },
  {
    album: "Evening Tones",
    artist: "Marina Vale",
    title: "Afterlight",
    duration: 248,
    artworkTitle: "COAST",
    artworkSubtitle: "HARBOR",
    artworkGradient: "from-[#ba9c78] via-[#43556c] to-[#17253b]",
  },
  {
    album: "Midnight Echo",
    artist: "Noir Atelier",
    title: "Velvet Hours",
    duration: 264,
    artworkTitle: "NOIR",
    artworkSubtitle: "SESSIONS",
    artworkGradient: "from-[#ca8d72] via-[#59415a] to-[#1b2336]",
  },
] as const;

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function ClimateDemo() {
  const [targetTemp, setTargetTemp] = useState(24);
  const [isDragging, setIsDragging] = useState(false);
  const dialRef = useRef<SVGSVGElement | null>(null);
  const roomTemp = 28;
  const currentAngle = temperatureToAngle(targetTemp);
  const fullArcPath = describeArc(CLIMATE_START_ANGLE, CLIMATE_END_ANGLE);
  const activeArcPath = describeArc(CLIMATE_START_ANGLE, currentAngle);
  const knobPosition = polarToCartesian(currentAngle);

  const updateTemperatureFromPointer = (clientX: number, clientY: number) => {
    const svg = dialRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * CLIMATE_VIEWBOX_SIZE;
    const y = ((clientY - rect.top) / rect.height) * CLIMATE_VIEWBOX_SIZE;

    setTargetTemp(angleToTemperature(pointToDialAngle(x, y)));
  };

  const handleDialPointerDown = (event: React.PointerEvent<SVGElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateTemperatureFromPointer(event.clientX, event.clientY);
  };

  const handleDialPointerMove = (event: React.PointerEvent<SVGElement>) => {
    if (!isDragging) return;
    updateTemperatureFromPointer(event.clientX, event.clientY);
  };

  const handleDialPointerEnd = (event: React.PointerEvent<SVGElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  };

  const adjustTemperature = (nextValue: number) => {
    setTargetTemp(clamp(nextValue, CLIMATE_MIN_TEMP, CLIMATE_MAX_TEMP));
  };

  return (
    <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[34px] bg-[#3f444d] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:max-w-[760px] sm:p-4 lg:max-w-[820px] lg:p-5">
      <div className="flex min-h-[420px] flex-col rounded-[28px] bg-[#40454e] px-4 py-4 sm:min-h-[460px] sm:px-6 sm:py-5 lg:min-h-[500px] lg:px-8 lg:py-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="text-white">
            <p className="text-[18px] font-semibold leading-[1.15] sm:text-[22px] lg:text-[26px]">
              Current
              <br />
              Temp.
              <br />
              {roomTemp}°
            </p>
          </div>
          <div className="ml-auto text-right text-white">
            <p className="text-[16px] uppercase tracking-[0.08em] text-[#a6aebc] sm:text-[17px] lg:text-[17px]">
              FAN
              <span className="ml-1 inline-block -translate-y-px text-white">⌄</span>
            </p>
            <p className="mt-1 text-[20px] font-semibold sm:text-[24px] lg:text-[30px]">Auto</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-5 sm:py-4">
          <div
            className="relative flex aspect-square w-full max-w-[240px] items-center justify-center sm:max-w-[300px] lg:max-w-[360px]"
            role="slider"
            tabIndex={0}
            aria-label="Set climate temperature"
            aria-valuemin={CLIMATE_MIN_TEMP}
            aria-valuemax={CLIMATE_MAX_TEMP}
            aria-valuenow={targetTemp}
            aria-valuetext={`${targetTemp} degrees`}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                event.preventDefault();
                adjustTemperature(targetTemp - 1);
              }

              if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                event.preventDefault();
                adjustTemperature(targetTemp + 1);
              }

              if (event.key === "Home") {
                event.preventDefault();
                adjustTemperature(CLIMATE_MIN_TEMP);
              }

              if (event.key === "End") {
                event.preventDefault();
                adjustTemperature(CLIMATE_MAX_TEMP);
              }
            }}
          >
            <div className="absolute inset-[13%] rounded-full bg-[radial-gradient(circle,_rgba(121,144,170,0.18),_rgba(64,69,78,0)_62%)] blur-[28px]" />
            <svg
              ref={dialRef}
              viewBox={`0 0 ${CLIMATE_VIEWBOX_SIZE} ${CLIMATE_VIEWBOX_SIZE}`}
              className="h-full w-full touch-none overflow-visible"
            >
              <defs>
                <linearGradient id="climate-track-glow" x1="42" y1="54" x2="278" y2="278" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8ca3be" />
                  <stop offset="55%" stopColor="#90a8c2" />
                  <stop offset="100%" stopColor="#d8dde5" />
                </linearGradient>
              </defs>

              <circle
                cx={CLIMATE_CENTER}
                cy={CLIMATE_CENTER}
                r={CLIMATE_RADIUS + 12}
                fill="rgba(255,255,255,0.02)"
              />
              <circle
                cx={CLIMATE_CENTER}
                cy={CLIMATE_CENTER}
                r={CLIMATE_RADIUS - 36}
                fill="#40454e"
              />
              <path
                d={fullArcPath}
                fill="none"
                stroke="rgba(146,151,160,0.34)"
                strokeWidth={CLIMATE_TRACK_WIDTH}
                strokeLinecap="round"
              />
              <path
                d={activeArcPath}
                fill="none"
                stroke="url(#climate-track-glow)"
                strokeWidth={CLIMATE_TRACK_WIDTH}
                strokeLinecap="round"
                className="drop-shadow-[0_0_10px_rgba(164,185,208,0.32)]"
              />
              <path
                d={fullArcPath}
                fill="none"
                stroke="transparent"
                strokeWidth={36}
                strokeLinecap="round"
                className="cursor-pointer"
                onPointerDown={handleDialPointerDown}
                onPointerMove={handleDialPointerMove}
                onPointerUp={handleDialPointerEnd}
                onPointerCancel={handleDialPointerEnd}
              />
              <circle
                cx={knobPosition.x}
                cy={knobPosition.y}
                r={13}
                fill="#f3f4f6"
                className="drop-shadow-[0_6px_16px_rgba(0,0,0,0.34)]"
                pointerEvents="none"
              />
              <circle
                cx={knobPosition.x}
                cy={knobPosition.y}
                r={5}
                fill="#c8d1db"
                pointerEvents="none"
              />
            </svg>

            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex w-[54%] max-w-[170px] flex-col items-center justify-center text-center text-[#9eabbc] sm:w-[52%] sm:max-w-[188px] lg:w-[50%] lg:max-w-[208px]">
              <p className="text-[clamp(2.2rem,12vw,4.1rem)] font-semibold leading-none tracking-[-0.035em]">
                {targetTemp}°
              </p>
              <p className="mt-2 whitespace-nowrap text-[clamp(0.62rem,2.2vw,1rem)] font-semibold uppercase tracking-[0.12em] leading-tight text-white sm:tracking-[0.14em]">
                Set Temperature
              </p>
              <p className="mt-2 max-w-[12ch] text-[clamp(0.48rem,1.55vw,0.68rem)] uppercase leading-[1.35] tracking-[0.12em] text-[#99a3b1] sm:mt-3 sm:max-w-[13ch] sm:tracking-[0.16em]">
                Drag or tap the dial
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => adjustTemperature(targetTemp - 1)}
            className="flex h-16 w-12 shrink-0 items-center justify-center rounded-r-[28px] border border-[#567098] border-l-0 text-[34px] font-normal text-white/85 transition-colors duration-300 hover:text-white sm:h-18 sm:w-14 sm:text-[42px] lg:h-20 lg:w-16 lg:text-[48px]"
            aria-label="Decrease temperature"
          >
            -
          </button>
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-1 text-[18px] font-semibold text-[#8c94a2] sm:px-3 sm:text-[22px] lg:px-4 lg:text-[26px]">
            <span className="shrink-0">{CLIMATE_MIN_TEMP}°</span>
            <div className="h-px min-w-0 flex-1 bg-[linear-gradient(90deg,rgba(140,148,162,0.45),rgba(140,148,162,0.1))]" />
            <span className="shrink-0">{CLIMATE_MAX_TEMP}°</span>
          </div>
          <button
            type="button"
            onClick={() => adjustTemperature(targetTemp + 1)}
            className="flex h-16 w-12 shrink-0 items-center justify-center rounded-l-[28px] border border-[#567098] border-r-0 text-[34px] font-normal text-white/85 transition-colors duration-300 hover:text-white sm:h-18 sm:w-14 sm:text-[42px] lg:h-20 lg:w-16 lg:text-[48px]"
            aria-label="Increase temperature"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function EntertainmentDemo() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const track = entertainmentTracks[trackIndex];
  const [elapsedSeconds, setElapsedSeconds] = useState(110);

  const selectTrack = (nextIndex: number) => {
    setTrackIndex(nextIndex);
    const nextTrack = entertainmentTracks[nextIndex];
    setElapsedSeconds(Math.round(nextTrack.duration * 0.36));
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setElapsedSeconds((value) => {
        if (value >= track.duration) {
          window.clearInterval(timer);
          setIsPlaying(false);
          return track.duration;
        }

        return Math.min(value + 1, track.duration);
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying, track.duration]);

  useEffect(() => {
    setElapsedSeconds((value) => Math.min(value, track.duration));
  }, [track.duration]);

  const handlePlayToggle = () => {
    if (elapsedSeconds >= track.duration) {
      setElapsedSeconds(0);
      setIsPlaying(true);
      return;
    }

    setIsPlaying((value) => !value);
  };

  return (
    <div className="mx-auto flex min-h-[360px] w-full items-center justify-center lg:min-h-[400px]">
      <div className="flex w-full max-w-[540px] flex-col items-center gap-8 lg:gap-10 xl:max-w-[580px] xl:gap-12">
        <div className="mx-auto w-full max-w-[240px] sm:max-w-[272px] xl:max-w-[292px]">
          <div className="rounded-[2px] bg-[#3c414a] p-[14px] shadow-[0_18px_44px_rgba(0,0,0,0.22)] sm:p-[16px] lg:p-[17px] xl:p-[18px]">
            <div className="rounded-[2px] bg-[#8f8fad] p-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)] sm:p-[24px] lg:p-[26px] xl:p-[30px]">
              <div
                className={`relative aspect-square overflow-hidden rounded-[1px] bg-gradient-to-br ${track.artworkGradient} shadow-[22px_24px_28px_rgba(0,0,0,0.26)]`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,196,160,0.4),transparent_24%),radial-gradient(circle_at_76%_72%,rgba(33,71,162,0.34),transparent_28%),linear-gradient(140deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(115deg,rgba(255,255,255,0.06),transparent_26%,transparent_74%,rgba(255,255,255,0.04)),radial-gradient(circle_at_48%_52%,rgba(80,79,182,0.28),transparent_15%),radial-gradient(circle_at_64%_18%,rgba(255,255,255,0.08),transparent_10%)]" />
                <div className="absolute left-[10%] top-[8%] text-[9px] font-semibold uppercase tracking-[0.42em] text-white/78 sm:text-[12px] xl:text-[12px] xl:tracking-[0.52em]">
                  S
                </div>
                <div className="absolute right-[8%] top-[6.5%] text-[8px] font-semibold uppercase tracking-[0.32em] text-white/78 sm:text-[9px] xl:text-[12px] xl:tracking-[0.5em]">
                  {track.artworkSubtitle}
                </div>
                <div className="absolute left-1/2 top-[50.5%] -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-[clamp(2rem,9vw,3.125rem)] font-normal tracking-[0.26em] text-white/92 sm:tracking-[0.3em] xl:tracking-[0.34em]">
                    {track.artworkTitle}
                  </p>
                  <p className="mt-3 text-[12px] tracking-[0.35em] text-white/78 sm:mt-4 sm:text-[16px] xl:text-[17px] xl:tracking-[0.5em]">...</p>
                </div>
                <div className="absolute bottom-[16%] left-1/2 h-[14px] w-[14px] -translate-x-1/2 rotate-45 border border-white/65 sm:h-[15px] sm:w-[15px] xl:h-[16px] xl:w-[16px]">
                  <div className="absolute inset-[3px] border border-white/45" />
                </div>
                <div className="absolute bottom-[11%] left-1/2 w-[58%] -translate-x-1/2 border border-white/22 px-2 py-1.5 text-[5px] uppercase tracking-[0.14em] text-white/60 sm:w-[54%] sm:px-3 sm:py-2 sm:text-[6px] sm:tracking-[0.2em]">
                  Curated sound experiences
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col items-center justify-center text-center">
          <div>
            <p className="text-[16px] font-semibold uppercase tracking-[0.02em] text-[#989daa] sm:text-[16px] xl:text-[17px]">
              {track.album}
            </p>
            <h5 className="mt-4 text-[clamp(2rem,7vw,2.875rem)] font-semibold leading-none tracking-[-0.035em] text-[#f5f4f2]">
              {track.artist}
            </h5>
            <p className="mt-2 text-[clamp(1.35rem,4.8vw,1.875rem)] font-semibold leading-none tracking-[-0.02em] text-[#f3f1ef]">
              {track.title}
            </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[500px] lg:mt-10 xl:mt-12 xl:max-w-[560px]">
            <Slider
              min={0}
              max={track.duration}
              step={1}
              value={[elapsedSeconds]}
              onValueChange={(value) =>
                setElapsedSeconds(Math.round(value[0] ?? elapsedSeconds))
              }
              className="[&_[data-slot=slider-range]]:bg-[#89919d] [&_[data-slot=slider-thumb]]:size-6 [&_[data-slot=slider-thumb]]:border-[#f2efeb] [&_[data-slot=slider-thumb]]:bg-[#f2efeb] [&_[data-slot=slider-thumb]]:shadow-[0_0_0_1px_rgba(0,0,0,0.15)] [&_[data-slot=slider-track]]:h-[8px] [&_[data-slot=slider-track]]:bg-white/14 sm:[&_[data-slot=slider-thumb]]:size-7 sm:[&_[data-slot=slider-track]]:h-[10px]"
              aria-label="Track progress"
            />
            <div className="mt-3 flex items-center justify-between text-[17px] font-semibold tracking-[-0.03em] text-[#f2efeb] sm:text-[18px] xl:text-[20px]">
              <span>{formatDuration(elapsedSeconds)}</span>
              <span>{formatDuration(track.duration)}</span>
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[320px] items-center justify-between gap-3 sm:mt-10 sm:max-w-[340px] xl:mt-12 xl:max-w-[360px] xl:gap-4">
            <button
              type="button"
              onClick={() =>
                selectTrack(
                  trackIndex === 0 ? entertainmentTracks.length - 1 : trackIndex - 1,
                )
              }
              className="group flex h-14 w-14 shrink-0 items-center justify-center text-white transition-opacity duration-300 hover:opacity-78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-16 sm:w-16 xl:h-18 xl:w-18"
              aria-label="Previous track"
            >
              <span className="relative block h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] xl:h-[40px] xl:w-[40px]">
                <span className="absolute left-0 top-1/2 h-[24px] w-[4px] -translate-y-1/2 bg-current sm:h-[28px] xl:h-[30px] xl:w-[5px]" />
                <span className="absolute left-[8px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[11px] border-r-[16px] border-y-transparent border-r-current sm:left-[9px] sm:border-y-[12px] sm:border-r-[17px] xl:left-[10px] xl:border-y-[13px] xl:border-r-[18px]" />
              </span>
            </button>

            <button
              type="button"
              onClick={handlePlayToggle}
              className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#f2efeb] text-[#f2efeb] transition-all duration-300 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-[74px] sm:w-[74px] xl:h-[82px] xl:w-[82px] xl:border-[5px]"
              aria-label={isPlaying ? "Pause playback" : "Play playback"}
            >
              {isPlaying ? (
                <span className="flex items-center gap-[6px] sm:gap-[7px] xl:gap-[8px]">
                  <span className="block h-[24px] w-[6px] bg-current sm:h-[28px] xl:h-[32px] xl:w-[7px]" />
                  <span className="block h-[24px] w-[6px] bg-current sm:h-[28px] xl:h-[32px] xl:w-[7px]" />
                </span>
              ) : (
                <span className="ml-1 block h-0 w-0 border-y-[13px] border-l-[20px] border-y-transparent border-l-current sm:border-y-[15px] sm:border-l-[23px] xl:border-y-[17px] xl:border-l-[26px]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => selectTrack((trackIndex + 1) % entertainmentTracks.length)}
              className="group flex h-14 w-14 shrink-0 items-center justify-center text-white transition-opacity duration-300 hover:opacity-78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-16 sm:w-16 xl:h-18 xl:w-18"
              aria-label="Next track"
            >
              <span className="relative block h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] xl:h-[40px] xl:w-[40px]">
                <span className="absolute right-0 top-1/2 h-[24px] w-[4px] -translate-y-1/2 bg-current sm:h-[28px] xl:h-[30px] xl:w-[5px]" />
                <span className="absolute right-[8px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[11px] border-l-[16px] border-y-transparent border-l-current sm:right-[9px] sm:border-y-[12px] sm:border-l-[17px] xl:right-[10px] xl:border-y-[13px] xl:border-l-[18px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SourcesDemo() {
  const [activeScene, setActiveScene] = useState<"all-off" | "scene-1">("scene-1");

  return (
    <div className="flex min-h-[360px] items-center justify-center sm:min-h-[420px]">
      <div className="w-full max-w-[740px] rounded-[22px] bg-[#40454e] shadow-[0_18px_36px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          className="flex h-[132px] w-full items-start gap-3 rounded-t-[22px] px-5 py-5 text-left sm:h-[150px] sm:gap-4 sm:px-6 sm:py-6 lg:h-[170px] lg:px-7"
        >
          <Bell className="mt-1 h-8 w-8 text-white sm:h-9 sm:w-9 lg:h-10 lg:w-10" strokeWidth={2.2} />
          <span className="text-[clamp(1.75rem,7vw,2.5rem)] font-semibold tracking-tight text-white">
            Lights
          </span>
        </button>
        <div className="grid grid-cols-2 border-t border-black/10">
          <button
            type="button"
            onClick={() => setActiveScene("all-off")}
            className={`h-[74px] rounded-bl-[22px] border-r border-black/10 px-3 text-[clamp(1rem,4.2vw,1.625rem)] font-semibold tracking-[0.04em] transition-colors duration-300 sm:h-[82px] lg:h-[92px] ${
              activeScene === "all-off"
                ? "bg-[#e7ebf2] text-[#222831]"
                : "bg-[#4b5160] text-white"
            }`}
          >
            ALL OFF
          </button>
          <button
            type="button"
            onClick={() => setActiveScene("scene-1")}
            className={`h-[74px] rounded-br-[22px] px-3 text-[clamp(1rem,4.2vw,1.625rem)] font-semibold tracking-[0.04em] transition-colors duration-300 sm:h-[82px] lg:h-[92px] ${
              activeScene === "scene-1"
                ? "bg-[#e7ebf2] text-[#222831]"
                : "bg-[#4b5160] text-white"
            }`}
          >
            SCENE 1
          </button>
        </div>
      </div>
    </div>
  );
}

export function LithomeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    updateIndex();
    carouselApi.on("select", updateIndex);
    carouselApi.on("reInit", updateIndex);

    return () => {
      carouselApi.off("select", updateIndex);
      carouselApi.off("reInit", updateIndex);
    };
  }, [carouselApi]);

  return (
    <section
      id="lithome-experience"
      ref={ref}
      className="relative overflow-hidden bg-black py-28 lg:py-40"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-[10%] top-[32%] h-72 w-72 rounded-full bg-[#5d6b80]/[0.08] blur-3xl" />
        <div className="absolute left-[8%] bottom-[10%] h-80 w-80 rounded-full bg-[#8e7b57]/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative left-1/2 mb-20 w-screen -translate-x-1/2 overflow-hidden text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{
              backgroundImage: `url(${unifiedControlBackground})`,
              backgroundPosition: "center 20%",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.5)_18%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.5)_82%,rgba(0,0,0,0.92)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-black/18" />
          <div className="relative mx-auto max-w-[1440px] px-8 py-24 lg:px-16 lg:py-32">
            <div className="mb-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/60">
                Unified Control
              </span>
            </div>
            <h2 className="mb-10 text-[38px] font-medium leading-[1.12] tracking-tight text-white sm:text-[44px] lg:text-[56px]">
              One interface for the way you live.
            </h2>
            <div className="mx-auto max-w-3xl space-y-6 text-[17px] font-normal leading-[1.8] text-white/72 lg:text-[18px]">
              <p>
                The best smart home technology is not defined by how much it can
                do. It is defined by how little effort it asks from you.
              </p>
              <p>
                Smart Lit brings lighting, climate, media, and scenes into a
                single control layer that feels measured, intuitive, and easy to
                revisit every day.
              </p>
              <p>
                Whether you are adjusting temperature, preparing a cinema room, or
                setting an evening scene, control remains quick, calm, and
                architectural.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-[2px] lg:p-8"
        >
          <div className="mb-8 flex flex-col gap-6 border-b border-white/8 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/52">
                Experience preview
              </p>
              <h3 className="mt-4 text-[28px] font-medium tracking-tight text-white lg:text-[36px]">
                Explore how a connected villa can feel in daily use.
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {showcaseSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`rounded-full border px-4 py-2 text-[12px] tracking-[0.16em] transition-all duration-300 ${
                    activeIndex === index
                      ? "border-white/35 bg-white text-black"
                      : "border-white/10 bg-white/[0.02] text-white/72 hover:border-white/25 hover:text-white"
                  }`}
                  aria-label={`Go to ${slide.title}`}
                  aria-pressed={activeIndex === index}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>

          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", loop: true }}
            className="px-0 lg:px-16"
          >
            <CarouselContent className="-ml-0">
              {showcaseSlides.map((slide) => (
                <CarouselItem key={slide.id} className="pl-0">
                  <div className="grid gap-8 xl:grid-cols-[0.44fr_0.56fr] xl:gap-12">
                    <div className="flex flex-col justify-between rounded-[28px] border border-white/8 bg-black/25 p-6 xl:p-8">
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.2em] text-white/52">
                          {slide.eyebrow}
                        </p>
                        <h4 className="mt-4 text-[34px] font-medium leading-[1.08] tracking-tight text-white xl:text-[46px]">
                          {slide.title}
                        </h4>
                        <p className="mt-6 max-w-md text-[17px] font-normal leading-[1.8] text-white/78 xl:text-[18px]">
                          {slide.description}
                        </p>
                      </div>

                      <div className="mt-10 flex items-center gap-3">
                        {showcaseSlides.map((item, index) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => carouselApi?.scrollTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeIndex === index
                                ? "w-16 bg-white"
                                : "w-8 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Select ${item.title}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 sm:p-5 xl:p-6">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_42%)]" />
                      <div className="relative">
                        {slide.id === "climate" && <ClimateDemo />}
                        {slide.id === "entertainment" && <EntertainmentDemo />}
                        {slide.id === "sources" && <SourcesDemo />}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 top-auto bottom-6 h-12 w-12 -translate-y-0 border-white/12 bg-black/55 text-white hover:bg-white hover:text-black disabled:bg-black/20 disabled:text-white/20 lg:left-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2" />
            <CarouselNext className="right-0 top-auto bottom-6 h-12 w-12 -translate-y-0 border-white/12 bg-black/55 text-white hover:bg-white hover:text-black disabled:bg-black/20 disabled:text-white/20 lg:right-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 text-center lg:mt-24"
        >
          <p className="text-[17px] font-normal italic text-white/68 lg:text-[18px]">
            Elegant control. Clearer living.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

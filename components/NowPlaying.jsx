import { useEffect, useState } from "react";

export default function NowPlaying() {
  return <></>;
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      const res = await fetch("/api/spotify/now-playing");
      const data = await res.json();
      setSong(data.isPlaying ? data : null);
    };

    fetchSong();
    const id = setInterval(fetchSong, 10000);
    return () => clearInterval(id);
  }, []);

  if (!song) return null;

  return (
    <div
      className="
        flex items-center gap-6
        px-6 py-5
        rounded-2xl
        backdrop-blur-md
        border border-white/20
        max-w-md
      "
      style={{ fontFamily: "Calibri, Arial, sans-serif" }}
    >
      {/* Album Art */}
      <img
        src={song.albumImage}
        alt=""
        className="w-20 h-20 rounded-xl object-cover"
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        {/* Label */}
        <div className="text-xs uppercase tracking-wide text-white/50 mb-1">
          Currently listening to <br/>{song.title} on Spotify
        </div>

        <div className="text-lg pt-1 text-white font-semibold truncate">
          {song.title}
        </div>

        <div className="text-sm text-white/70 truncate max-w-[160px]">
          {song.artist}
        </div>

        {/* Waveform */}
        <div className="flex items-end gap-[4px] mt-4 h-6">
        {Array.from({ length: 15 }).map((_, i) => {
          const height = 12 + Math.random() * 18;   // 12–30px
          const duration = 0.9 + Math.random() * 0.8; // 0.9–1.7s

          return (
            <span
              key={i}
              className="w-[6px] bg-[#1DB954] animate-wave-random"
              style={{
                "--max-h": `${height}px`,
                "--dur": `${duration}s`,
                animationDelay: `${i * 0.06}s`,
              }}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

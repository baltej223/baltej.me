export const runtime = "nodejs";
// import { NextRequest, NextResponce } from "next";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";


async function getAccessToken() {
  const basicAuth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
}


async function getNowPlaying(accessToken) {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}


export async function GET() {
  try {
    const tokenData = await getAccessToken();
    const accessToken = tokenData.access_token;

    const response = await getNowPlaying(accessToken);

    // Nothing playing
    if (response.status === 204 || response.status > 400) {
      return new Response(
        JSON.stringify({ isPlaying: false }),
        {
          headers: {
            "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
          },
        }
      );
    }

    const data = await response.json();

    const song = {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map(a => a.name).join(", "),
      album: data.item.album.name,
      albumImage: data.item.album.images[0]?.url,
      songUrl: data.item.external_urls.spotify,
    };

    return new Response(JSON.stringify(song), {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ isPlaying: false }),
      { status: 500 }
    );
  }
}

// export default async function POST() {
//   new NextResponce({});
// }

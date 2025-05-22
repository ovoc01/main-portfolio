// app/icon.tsx (or app/your-route/icon.tsx)
import { Terminal } from 'lucide-react';
import { ImageResponse } from 'next/og';

// Recommended: Set runtime to edge for ImageResponse
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  const iconVisualSize = 21; // Corresponds to w-3 h-3
  const padding = 6;         // Corresponds to p-1.5
  const borderWidth = 2;     // Corresponds to border-2

  return new ImageResponse(
    (
      // Outermost container to center the styled icon box on the 32x32 canvas
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'grey', // For debugging the centering
        }}
      >
        {/* Icon Container: Mimicking the Logo component's style */}
        <div
          style={{
            display: 'flex', // To center the Terminal icon within this box
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${padding}px`,
            border: `${borderWidth}px solid #f97316`, // orange-500
            borderRadius: '6px', // rounded-md (Tailwind's default 'md' is 0.375rem = 6px)
            backgroundColor: 'rgba(249, 115, 22, 0.10)', // orange-500 with 10% opacity
            // `backdrop-blur` is not directly supported in ImageResponse.
            // The semi-transparent background is the closest we can get.
          }}
        >
          {/* Terminal Icon: Styling applied directly */}
          <Terminal
            color="#fdba74" // text-orange-300
            size={iconVisualSize}
            // Lucide icons usually have a default strokeWidth of 2.
            // For a small 12px icon, you might want to make it thinner if it looks too bold.
            // strokeWidth={1.5} // Optional: adjust if needed
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      // You can embed fonts here if your icon included text, but not needed for just the Terminal icon.
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await fetch(
      //       new URL('./Inter-SemiBold.otf', import.meta.url)
      //     ).then((res) => res.arrayBuffer()),
      //     weight: 400,
      //     style: 'normal',
      //   },
      // ],
    }
  );
}
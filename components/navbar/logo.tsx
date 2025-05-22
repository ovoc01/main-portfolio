import { Terminal } from 'lucide-react';

export const Logo = ({ className }: { className?: string }) => (
    // If this logo is a link, wrap it in a Next.js <Link href="/">
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
        {/* Icon Container: Orange border, very dark semi-transparent background with an orange hint */}
        <div className="
            p-1.5 border-2 border-orange-500 rounded-md
            bg-orange-500/10 backdrop-blur-sm  // Subtle orange tint in the background
        ">
            {/* Icon: Light orange/amber color */}
            <Terminal className="w-3 h-3 text-orange-300" />
        </div>
        {/* Text: Bright white or very light gray (this can often stay neutral) */}
        <h1 className="font-bold text-neutral-100 text-lg">
            rzmirindra
        </h1>
    </div>
);
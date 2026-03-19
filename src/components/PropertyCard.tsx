import { MapPin, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price?: string;
  type?: string;
  video?: string;
  onInquire?: () => void;
}

function resolveAssetPath(path: string) {
  if (!path) return path;

  // Keep absolute and data/blob URLs as-is. Prefix local assets so they resolve from /public.
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  if (path.startsWith('/')) {
    const base = import.meta.env.BASE_URL ?? '/';
    return `${base.replace(/\/$/, '')}${path}`;
  }

  // Normalize relative paths (./ or ../) so files in /public can be referenced safely.
  const normalizedPath = path.replace(/^(\.\/)+/, '').replace(/^(\.\.\/)+/, '');
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base.replace(/\/$/, '')}/${normalizedPath}`;
}

export function PropertyCard({ 
  image, 
  title, 
  location, 
  price, 
  type,
  video,
  onInquire 
}: PropertyCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const hasVideo = Boolean(video);
  const resolvedImage = resolveAssetPath(image);
  const resolvedVideo = video ? resolveAssetPath(video) : undefined;
  const fallbackPoster = resolveAssetPath('/house.jpg');
  const activePoster = posterFailed ? fallbackPoster : resolvedImage;

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
        <div
          className={`relative overflow-hidden h-64 ${hasVideo ? 'cursor-pointer' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            if (!hasVideo) return;
            setVideoFailed(false);
            setIsVideoOpen(true);
          }}
        >
          {hasVideo && isHovered ? (
            <video
              className="w-full h-full object-cover"
              src={resolvedVideo}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <img 
              src={resolvedImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}
          {hasVideo && (
            <div
              className="absolute inset-0 bg-black/10 md:bg-black/0 md:group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center"
              onClick={() => {
                if (!hasVideo) return;
                setVideoFailed(false);
                setIsVideoOpen(true);
              }}
            >
              <div className="flex flex-col items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:group-hover:scale-100 scale-100 md:scale-75">
                <div className="bg-accent rounded-full p-3 shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Watch Video
                </span>
              </div>
            </div>
          )}
          {type && (
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded text-sm">
              {type}
            </div>
          )}
        </div>
      <div className="p-6">
        <h3 className="text-xl mb-2 text-[#0A2540] font-['Poppins'] font-semibold">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        {price && (
          <p className="text-2xl text-accent mb-4 font-['Poppins'] font-bold">{price}</p>
        )}
        <Button 
          variant="accent" 
          className="w-full"
          onClick={onInquire}
        >
          Inquire Now
        </Button>
      </div>
    </div>

    {/* Video Modal */}
    {isVideoOpen && hasVideo && createPortal(
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: 'rgba(10, 37, 64, 0.96)',
        }}
      >
        <button
          onClick={() => setIsVideoOpen(false)}
          style={{
            position: 'fixed',
            top: '16px',
            right: '16px',
            zIndex: 10000,
            backgroundColor: '#C9A24D',
            color: '#fff',
            borderRadius: '9999px',
            padding: '8px',
            cursor: 'pointer',
          }}
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1100px',
              height: '82vh',
              minHeight: '300px'
            }}
          >
            <video
              style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundColor: '#000',
              }}
              poster={activePoster}
              controls
              autoPlay
              playsInline
              preload="auto"
              onCanPlay={() => {
                setVideoFailed(false);
              }}
              onError={() => {
                setVideoFailed(true);
              }}
            >
              <source src={resolvedVideo} type="video/mp4" />
            </video>
            {videoFailed && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px',
                }}
              >
                <img
                  src={activePoster}
                  alt={`${title} preview`}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={() => setPosterFailed(true)}
                />
                <p style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '14px', padding: '4px 12px', borderRadius: '6px' }}>
                  Unable to load video. Showing image preview instead.
                </p>
                <p style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>
                  Source: {resolvedVideo}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  );
}

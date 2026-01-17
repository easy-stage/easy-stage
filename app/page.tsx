'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, MapPin, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState({ total: 0, cities: 0, companies: 0 });

  useEffect(() => {
    // Fetch stats
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.total) setStats(data);
      })
      .catch(() => {});
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/stages?search=${encodeURIComponent(search.trim())}`);
    } else {
      router.push('/stages');
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: '#40dacf'
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 px-6 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="font-semibold text-lg text-slate-900 hover:text-slate-700 transition-colors">
            easystage.nl
          </a>
          <div className="flex items-center gap-8">
            <a href="/stages" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Stages
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Alle stages in Nederland,
            <br />
            op één plek
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop met zoeken op tientallen websites. Wij verzamelen alle stageplekken voor jou.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek op functie, bedrijf of interesse..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-14 pr-32 h-16 text-lg bg-white border-0 shadow-xl shadow-slate-900/10 rounded-2xl focus:ring-4 focus:ring-white/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                Zoeken
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Stats */}
          {stats.total > 0 && (
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <GraduationCap className="h-5 w-5 text-slate-700" />
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {stats.total.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-slate-600">Stages</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="h-5 w-5 text-slate-700" />
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {stats.cities.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-slate-600">Steden</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Building2 className="h-5 w-5 text-slate-700" />
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {stats.companies.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-slate-600">Bedrijven</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 sm:px-8 py-6 text-center text-slate-700 text-sm">
        © 2026 easystage.nl • Alle rechten voorbehouden
      </footer>
    </div>
  );
}

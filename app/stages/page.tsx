'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, MapPin, Building2, GraduationCap, Euro, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Listing {
  id: string;
  titel: string | null;
  wervende_titel: string | null;
  omschrijving: string | null;
  organisatie_naam: string | null;
  organisatie_logo: string | null;
  adres_plaats: string | null;
  adres_straat: string | null;
  adres_huisnummer: string | null;
  adres_postcode: string | null;
  kwalificatie_niveau: string | null;
  leerweg: string | null;
  bedrag_van: number | null;
  bedrag_tot: number | null;
  startdatum: string | null;
  einddatum: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function StagesPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [debouncedCity, setDebouncedCity] = useState('');

  // Debounce search inputs
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedCity(city);
      setPage(1); // Reset to first page on new search
    }, 300);
    return () => clearTimeout(timer);
  }, [search, city]);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (debouncedSearch) params.set('search', debouncedSearch);
      if (debouncedCity) params.set('city', debouncedCity);
      params.set('page', page.toString());
      params.set('limit', '20');

      const res = await fetch(`/api/listings?${params.toString()}`);
      const data = await res.json();
      
      if (data.listings) {
        setListings(data.listings);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch listings:', error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, debouncedCity, page]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const formatCompensation = (min: number | null, max: number | null) => {
    if (!min && !max) return null;
    if (min && max && min === max) return `€${min}`;
    if (min && max) return `€${min} - €${max}`;
    if (min) return `vanaf €${min}`;
    if (max) return `tot €${max}`;
    return null;
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #40dacf 0%, #e0f7f4 50%, #f0fdf9 100%)'
      }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="font-semibold text-lg text-slate-900 hover:text-slate-700 transition-colors">
              easystage.nl
            </a>
            <div className="flex items-center gap-8">
              <a href="/stages" className="text-slate-900 font-medium transition-colors">
                Stages
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search Section */}
      <section className="px-6 sm:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Vind jouw stage
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 mb-8">
            {pagination ? `${pagination.total.toLocaleString()} stages beschikbaar` : 'Zoek door duizenden stages'}
          </p>
          
          {/* Search Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek op functie, bedrijf..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-14 text-lg bg-white border-slate-200 shadow-lg shadow-slate-200/50 focus:shadow-xl transition-shadow"
              />
            </div>
            <div className="relative sm:w-48">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Stad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-12 h-14 text-lg bg-white border-slate-200 shadow-lg shadow-slate-200/50 focus:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Loading State */}
          {loading && (
            <div className="grid gap-4 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur border-slate-200/50">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Results Grid */}
          {!loading && listings.length > 0 && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {listings.map((listing) => (
                  <Link href={`/stages/${listing.id}`} key={listing.id}>
                  <Card 
                    className="bg-white/90 backdrop-blur border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group h-full"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                            {listing.wervende_titel || listing.titel || 'Stage'}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Building2 className="h-4 w-4 shrink-0" />
                            <span className="truncate">{listing.organisatie_naam || 'Onbekend bedrijf'}</span>
                          </CardDescription>
                        </div>
                        {listing.organisatie_logo && (
                          <img 
                            src={listing.organisatie_logo} 
                            alt="" 
                            className="w-12 h-12 object-contain rounded-lg bg-slate-50 p-1 shrink-0"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Location */}
                      {listing.adres_plaats && (
                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                          <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                          <span>{listing.adres_plaats}</span>
                        </div>
                      )}
                      
                      {/* Description */}
                      {listing.omschrijving && (
                        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                          {listing.omschrijving}
                        </p>
                      )}
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {listing.kwalificatie_niveau && (
                          <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-0">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            {listing.kwalificatie_niveau}
                          </Badge>
                        )}
                        {listing.leerweg && (
                          <Badge variant="outline" className="text-slate-600">
                            {listing.leerweg}
                          </Badge>
                        )}
                        {formatCompensation(listing.bedrag_van, listing.bedrag_tot) && (
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-0">
                            <Euro className="h-3 w-3 mr-1" />
                            {formatCompensation(listing.bedrag_van, listing.bedrag_tot)}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Vorige
                  </button>
                  <span className="text-slate-600">
                    Pagina {page} van {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                    disabled={page === pagination.totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Volgende
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!loading && listings.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Geen stages gevonden
              </h3>
              <p className="text-slate-600">
                Probeer een andere zoekterm of pas je filters aan.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 py-8 text-center text-slate-600 text-sm">
        © 2026 easystage.nl • Alle rechten voorbehouden
      </footer>
    </div>
  );
}

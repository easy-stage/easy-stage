import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Get total internships
    const totalResult = await pool.query('SELECT COUNT(*) FROM internships');
    const total = parseInt(totalResult.rows[0].count);

    // Get unique cities
    const citiesResult = await pool.query(
      'SELECT COUNT(DISTINCT adres_plaats) FROM internships WHERE adres_plaats IS NOT NULL'
    );
    const cities = parseInt(citiesResult.rows[0].count);

    // Get unique companies
    const companiesResult = await pool.query(
      'SELECT COUNT(DISTINCT organisatie_naam) FROM internships WHERE organisatie_naam IS NOT NULL'
    );
    const companies = parseInt(companiesResult.rows[0].count);

    return NextResponse.json({
      total,
      cities,
      companies,
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { total: 0, cities: 0, companies: 0 },
      { status: 500 }
    );
  }
}

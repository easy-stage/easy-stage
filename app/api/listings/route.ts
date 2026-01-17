import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const city = searchParams.get('city') || '';
    const niveau = searchParams.get('niveau') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Build query with filters
    let query = `
      SELECT 
        id, titel, wervende_titel, omschrijving,
        organisatie_naam, organisatie_logo,
        adres_plaats, adres_straat, adres_huisnummer, adres_postcode,
        kwalificatie_niveau, leerweg,
        bedrag_van, bedrag_tot,
        startdatum, einddatum
      FROM internships
      WHERE 1=1
    `;
    
    const params: (string | number)[] = [];
    let paramIndex = 1;

    if (search) {
      query += ` AND (
        wervende_titel ILIKE $${paramIndex} 
        OR titel ILIKE $${paramIndex} 
        OR organisatie_naam ILIKE $${paramIndex}
        OR omschrijving ILIKE $${paramIndex}
      )`;
      params.push(`%${search}%`);
      paramIndex++;
    }

    if (city) {
      query += ` AND adres_plaats ILIKE $${paramIndex}`;
      params.push(`%${city}%`);
      paramIndex++;
    }

    if (niveau) {
      query += ` AND kwalificatie_niveau = $${paramIndex}`;
      params.push(niveau);
      paramIndex++;
    }

    // Get total count
    const countQuery = query.replace(/SELECT[\s\S]*?FROM/, 'SELECT COUNT(*) FROM');
    const countResult = await pool.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    // Add pagination
    query += ` ORDER BY gewijzigd_datum DESC NULLS LAST LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await pool.query(query, params);

    return NextResponse.json({
      listings: result.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

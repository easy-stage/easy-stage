# Stagemarkt Database Schema

## Table: `internships`

Stores all internship listings from stagemarkt.nl

| Column | Type | Description |
|--------|------|-------------|
| `id` | TEXT | Primary key - unique internship ID (e.g., `d7e7e6c5-a5a0-4021-b046-191101628dc2-25740`) |
| `aantal` | INTEGER | Number of positions available |
| `contactpersoon` | TEXT | Contact person name |
| `emailadres` | TEXT | Contact email |
| `telefoon` | TEXT | Contact phone |
| `omschrijving` | TEXT | Internship description |
| `titel` | TEXT | Official title/qualification |
| `wervende_titel` | TEXT | Marketing title |
| `vaardigheden` | TEXT | Required skills |
| `aanbieden` | TEXT | What they offer |
| `website` | TEXT | Company website |
| **Address** |
| `adres_huisnummer` | TEXT | House number |
| `adres_plaats` | TEXT | City |
| `adres_postcode` | TEXT | Postal code |
| `adres_straat` | TEXT | Street |
| `adres_lat` | REAL | Latitude |
| `adres_lon` | REAL | Longitude |
| **Organization** |
| `organisatie_id` | TEXT | Organization UUID |
| `organisatie_naam` | TEXT | Company name |
| `organisatie_telefoon` | TEXT | Company phone |
| `organisatie_email` | TEXT | Company email |
| `organisatie_website` | TEXT | Company website |
| `organisatie_logo` | TEXT | Logo URL |
| `organisatie_grootte` | TEXT | Company size (e.g., "2 tot en met 9 medewerkers") |
| `organisatie_leerbedrijf_id` | TEXT | Learning company ID |
| `organisatie_omschrijving` | TEXT | Company description |
| **JSON Fields** |
| `kerntaken` | JSONB | Core tasks array |
| `kenmerken` | JSONB | Characteristics/features array |
| `media` | JSONB | Media/images array |
| `vergoedingen` | JSONB | Compensations array |
| **Financials** |
| `bedrag_van` | REAL | Minimum compensation amount |
| `bedrag_tot` | REAL | Maximum compensation amount |
| **Qualification** |
| `kwalificatie_niveau` | TEXT | MBO level (e.g., "Niveau 1") |
| `kwalificatie_crebocode` | TEXT | CREBO code |
| **Dates** |
| `startdatum` | TEXT | Start date (ISO format) |
| `einddatum` | TEXT | End date (ISO format) |
| `gewijzigd_datum` | TEXT | Last modified date |
| **Other** |
| `leerweg` | TEXT | Learning path (BOL/BBL) |
| `study_description` | TEXT | Study description |
| `dagen_per_week` | TEXT | Days per week |
| `raw_json` | JSONB | Complete raw API response |

## Example Queries

```sql
-- Count internships by city
SELECT adres_plaats, COUNT(*) as count 
FROM internships 
GROUP BY adres_plaats 
ORDER BY count DESC;

-- Find internships by MBO level
SELECT titel, organisatie_naam, adres_plaats 
FROM internships 
WHERE kwalificatie_niveau = 'Niveau 2';

-- Search by company name
SELECT * FROM internships 
WHERE organisatie_naam ILIKE '%bakker%';

-- Get compensations
SELECT titel, organisatie_naam, bedrag_van, bedrag_tot 
FROM internships 
WHERE bedrag_tot > 0 
ORDER BY bedrag_tot DESC;
```

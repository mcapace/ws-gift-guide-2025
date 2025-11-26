# Proof of Purchase Form Setup

This form allows users to submit proof of purchase from featured wineries to receive a 3-month free subscription to WineSpectator.com.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
RESEND_API_KEY=re_your_api_key_here
PROOF_OF_PURCHASE_EMAIL=marissa@winespectator.com
```

### 2. Get Resend API Key

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and add it to `.env.local`

### 3. Configure Email Address

Update `PROOF_OF_PURCHASE_EMAIL` in `.env.local` to Marissa's actual email address.

### 4. Verify Domain (Optional but Recommended)

For production, you should verify your domain in Resend to send from `@winespectator.com`:
1. Go to Resend Dashboard → Domains
2. Add `winespectator.com`
3. Add the DNS records provided
4. Update the `from` field in `src/app/api/proof-of-purchase/route.ts` to use your verified domain

### 5. Gmail Folder Setup (Optional)

If you want submissions to go directly to a Gmail folder:

1. Create a Gmail filter:
   - Go to Gmail Settings → Filters and Blocked Addresses
   - Create a new filter
   - Set "From" to the Resend sending address
   - Set "Subject contains" to "Proof of Purchase Submission"
   - Choose "Skip the Inbox" and "Apply the label" → Create label "Proof of Purchase"

2. Or use Gmail forwarding rules to automatically organize emails

## Form Features

- **Name**: User's full name (required)
- **Email**: User's email address (required)
- **Winery Selection**: Dropdown of all featured partners (required)
- **Receipt Upload**: File upload for proof of purchase (JPG, PNG, GIF, or PDF, max 10MB)
- **Email Notification**: Sends email to Marissa with all details and receipt attachment

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the bottom of the page
3. Fill out the form and submit
4. Check the email inbox (or console logs if Resend is not configured)

## Troubleshooting

- If emails aren't sending, check that `RESEND_API_KEY` is set correctly
- Check the browser console and server logs for errors
- Verify the email address in `PROOF_OF_PURCHASE_EMAIL` is correct
- Make sure file uploads are working (check file size limits)


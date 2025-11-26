# Vercel Environment Variables Setup

## Option 1: Using Vercel CLI (Recommended)

Run these commands in your terminal (you'll be prompted to enter the values):

```bash
# Add Resend API Key
vercel env add RESEND_API_KEY production

# Add Proof of Purchase Email
vercel env add PROOF_OF_PURCHASE_EMAIL production
```

When prompted:
- For `RESEND_API_KEY`: Enter your Resend API key (starts with `re_`)
- For `PROOF_OF_PURCHASE_EMAIL`: Enter Marissa's email address

**Note:** You can also add these for `preview` and `development` environments if needed:
```bash
vercel env add RESEND_API_KEY preview
vercel env add RESEND_API_KEY development
vercel env add PROOF_OF_PURCHASE_EMAIL preview
vercel env add PROOF_OF_PURCHASE_EMAIL development
```

## Option 2: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project: `ws-gift-guide-2025`
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_your_api_key_here`
   - Environments: Select all (Production, Preview, Development)

   **Variable 2:**
   - Name: `PROOF_OF_PURCHASE_EMAIL`
   - Value: `marissa@winespectator.com` (or actual email)
   - Environments: Select all (Production, Preview, Development)

5. Click **Save**
6. Redeploy your project for changes to take effect

## Verify Setup

After adding the variables, you can verify they're set:
```bash
vercel env ls
```

## Redeploy

After adding environment variables, you may need to trigger a new deployment:
```bash
vercel --prod
```

Or redeploy from the Vercel dashboard.


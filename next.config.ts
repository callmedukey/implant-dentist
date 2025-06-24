import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  async redirects() {
    return [
      {
        source: "/doctors",
        destination: "/about#doctors",
        permanent: true,
      },
      {
        source: "/staff",
        destination: "/about#staff",
        permanent: true,
      },
      {
        source: "/clinic-tour",
        destination: "/about#clinic-tour",
        permanent: true,
      },
      {
        source: "/reservation",
        destination: "/about#reservation",
        permanent: true,
      },
      {
        source: "/location",
        destination: "/about#location",
        permanent: true,
      },
      {
        source: "/special-system/chronic-disease",
        destination: "/special-system#chronic-disease",
        permanent: true,
      },
      {
        source: "/special-system/digital",
        destination: "/special-system#digital",
        permanent: true,
      },
      {
        source: "/special-system/pain-relief",
        destination: "/special-system#pain-relief",
        permanent: true,
      },
      {
        source: "/special-system/sterilization",
        destination: "/special-system#sterilization",
        permanent: true,
      },
      {
        source: "/special-system/warranty",
        destination: "/special-system#warranty",
        permanent: true,
      },
      {
        source: "/special-implant/bone-graft",
        destination: "/special-implant#bone-graft",
        permanent: true,
      },
      {
        source: "/special-implant/digital",
        destination: "/special-implant#digital",
        permanent: true,
      },
      {
        source: "/special-implant/insurance",
        destination: "/special-implant#insurance",
        permanent: true,
      },
      {
        source: "/wisdom-tooth/specialist",
        destination: "/wisdom-tooth#specialist",
        permanent: true,
      },
      {
        source: "/wisdom-tooth/same-day",
        destination: "/wisdom-tooth#same-day",
        permanent: true,
      },
      {
        source: "/jaw-treatment/disease",
        destination: "/jaw-treatment#disease",
        permanent: true,
      },
      {
        source: "/jaw-treatment/equipment",
        destination: "/jaw-treatment#equipment",
        permanent: true,
      },
      {
        source: "/jaw-treatment/splint",
        destination: "/jaw-treatment#splint",
        permanent: true,
      },
      {
        source: "/integrated-care/whitening",
        destination: "/integrated-care#whitening",
        permanent: true,
      },
      {
        source: "/integrated-care/cavity",
        destination: "/integrated-care#cavity",
        permanent: true,
      },
      {
        source: "/integrated-care/soft-tissue",
        destination: "/integrated-care#soft-tissue",
        permanent: true,
      },
      {
        source: "/natural-tooth/apicectomy",
        destination: "/natural-tooth#apicectomy",
        permanent: true,
      },
      {
        source: "/natural-tooth/mta",
        destination: "/natural-tooth#mta",
        permanent: true,
      },
      {
        source: "/natural-tooth/gum-treatment",
        destination: "/natural-tooth#gum-treatment",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/mattress-sofa",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/air-conditioner",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/entry-cleaning",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/apply-service",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/education-inquiry",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/((?!api$|api/).*)",
        headers: [
          {
            key: "Surrogate-Control",
            value:
              "max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2|avif|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

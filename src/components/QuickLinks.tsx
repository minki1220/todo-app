"use client";

interface LinkItem {
  name: string;
  url: string;
  domain: string;
  color: string;
}

export default function QuickLinks() {
  const links: LinkItem[] = [
    {
      name: "Google",
      url: "https://www.google.com",
      domain: "google.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Naver",
      url: "https://www.naver.com",
      domain: "naver.com",
      color: "from-green-400 to-green-600",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      domain: "youtube.com",
      color: "from-red-400 to-red-600",
    },
    {
      name: "GitHub",
      url: "https://www.github.com",
      domain: "github.com",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      domain: "openai.com",
      color: "from-teal-400 to-cyan-600",
    },
    {
      name: "노마드코더",
      url: "https://nomadcoders.co",
      domain: "nomadcoders.co",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      domain: "netflix.com",
      color: "from-red-600 to-red-800",
    },
  ];

  return (
    <div className="mb-6">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-3">
          빠른 링크 🚀
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-xl  ${link.color} 
                flex items-center justify-center text-white p-2
                shadow-md hover:shadow-lg transform hover:scale-110 
                transition-all duration-200 cursor-pointer overflow-hidden`}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${link.domain}&sz=128`}
                  alt={link.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // 파비콘 로드 실패 시 대체 텍스트 표시
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xl font-bold">${link.name[0]}</span>`;
                    }
                  }}
                />
              </div>
              <span className="text-xs text-gray-600 mt-1 group-hover:text-gray-900 transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


import React, { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =====================================================
   1. DATA MATA KULIAH
===================================================== */

const courses = [
  {
    id: 1,
    code: "MK-01",
    title: "Mengenal Ilmu Komputer",
    category: "Dasar Komputer",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    description: "Memahami konsep dasar ilmu komputer, sejarah, dan perkembangan teknologi informasi.",
    video: "https://www.youtube.com/embed/zOjov-2OZ0E",
    chapters: [
      {
        title: "Pengertian Ilmu Komputer",
        lead: "Ilmu komputer merupakan bidang ilmu yang mempelajari komputasi, algoritma, serta pengolahan informasi menggunakan sistem komputer.",
        sections: [
          ["Apa itu ilmu komputer?", "Ilmu komputer adalah disiplin ilmu yang mempelajari teori, desain, pengembangan, dan penerapan sistem komputasi. Bidang ini tidak hanya membahas perangkat komputer, tetapi juga algoritma, data, kecerdasan buatan, dan teknologi informasi."],
          ["Sejarah perkembangan komputer", "Perkembangan komputer dimulai dari alat hitung mekanik hingga komputer elektronik modern. Charles Babbage dikenal melalui rancangan Analytical Engine, sedangkan perkembangan komputer elektronik membawa perubahan besar dalam kehidupan manusia."],
          ["Manfaat ilmu komputer", "Ilmu komputer digunakan dalam pendidikan, kesehatan, industri, komunikasi, transportasi, dan berbagai bidang lainnya. Kemampuan komputasi membantu manusia mengolah data dan menyelesaikan permasalahan secara sistematis."]
        ]
      },
      {
        title: "Komponen Sistem Komputer",
        lead: "Sistem komputer terdiri atas hardware, software, dan brainware yang bekerja bersama.",
        sections: [
          ["Hardware", "Hardware adalah bagian fisik komputer yang dapat dilihat dan disentuh, seperti prosesor, monitor, keyboard, dan perangkat penyimpanan."],
          ["Software", "Software adalah kumpulan instruksi atau program yang digunakan untuk mengatur kerja komputer dan membantu pengguna menyelesaikan pekerjaan."],
          ["Brainware", "Brainware adalah manusia yang menggunakan, mengelola, atau mengembangkan sistem komputer."]
        ]
      },
      {
        title: "Perkembangan Teknologi",
        lead: "Teknologi komputer terus berkembang mengikuti kebutuhan manusia dan perubahan zaman.",
        sections: [
          ["Komputasi modern", "Komputasi modern mencakup cloud computing, artificial intelligence, big data, dan Internet of Things."],
          ["Transformasi digital", "Transformasi digital merupakan pemanfaatan teknologi untuk meningkatkan efisiensi proses dan layanan."],
          ["Tantangan teknologi", "Keamanan informasi, privasi data, dan etika digital merupakan aspek penting dalam perkembangan teknologi."]
        ]
      }
    ]
  },
  {
    id: 2,
    code: "MK-02",
    title: "Perangkat Keras Komputer",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000",
    description: "Mempelajari komponen fisik komputer beserta fungsi dan cara kerjanya.",
    video: "https://www.youtube.com/embed/O5nskjZ_GoI",
    chapters: [
      {
        title: "Pengertian Hardware",
        lead: "Hardware merupakan seluruh komponen fisik yang membentuk sistem komputer.",
        sections: [
          ["Pengertian perangkat keras", "Perangkat keras adalah komponen komputer yang memiliki bentuk fisik dan dapat disentuh. Setiap perangkat mempunyai fungsi tertentu dalam proses input, pemrosesan, penyimpanan, dan output."],
          ["Perangkat input", "Perangkat input digunakan untuk memasukkan data ke komputer. Contohnya keyboard, mouse, scanner, dan mikrofon."],
          ["Perangkat output", "Perangkat output digunakan untuk menyampaikan hasil pemrosesan komputer, misalnya monitor, printer, dan speaker."]
        ]
      },
      {
        title: "Komponen Internal",
        lead: "Komponen internal bekerja sama menjalankan instruksi dan mengolah data.",
        sections: [
          ["Processor", "CPU merupakan pusat pemrosesan instruksi yang menjalankan operasi aritmetika, logika, dan pengendalian."],
          ["RAM", "Random Access Memory menyimpan data sementara yang sedang digunakan oleh sistem dan aplikasi."],
          ["Motherboard", "Motherboard merupakan papan utama yang menghubungkan prosesor, memori, penyimpanan, dan komponen lainnya."]
        ]
      },
      {
        title: "Media Penyimpanan",
        lead: "Media penyimpanan digunakan untuk menyimpan data dan program.",
        sections: [
          ["Hard Disk", "HDD menggunakan piringan magnetik untuk menyimpan data secara permanen."],
          ["Solid State Drive", "SSD menggunakan memori flash dan tidak memiliki komponen bergerak sehingga umumnya memiliki kecepatan akses lebih tinggi dibanding HDD."],
          ["Perbandingan penyimpanan", "Pemilihan media penyimpanan mempertimbangkan kapasitas, kecepatan, harga, dan kebutuhan pengguna."]
        ]
      }
    ]
  },
  {
    id: 3,
    code: "MK-03",
    title: "Perangkat Lunak",
    category: "Software",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000",
    description: "Mengenal sistem operasi, aplikasi, dan perangkat lunak pendukung komputer.",
    video: "https://www.youtube.com/embed/1C4z5Gf0W0I",
    chapters: [
      {
        title: "Konsep Software",
        lead: "Software merupakan sekumpulan instruksi yang mengendalikan operasi komputer.",
        sections: [
          ["Pengertian software", "Perangkat lunak adalah program yang berisi instruksi untuk menjalankan tugas tertentu pada komputer."],
          ["System software", "System software mengatur sumber daya komputer dan menyediakan lingkungan bagi aplikasi."],
          ["Application software", "Application software dibuat untuk membantu pengguna melakukan pekerjaan tertentu, seperti mengolah dokumen dan membuat desain."]
        ]
      },
      {
        title: "Sistem Operasi",
        lead: "Sistem operasi menjadi penghubung antara pengguna, aplikasi, dan perangkat keras.",
        sections: [
          ["Fungsi sistem operasi", "Sistem operasi mengelola memori, proses, file, perangkat input-output, dan keamanan sistem."],
          ["Jenis sistem operasi", "Contoh sistem operasi antara lain Windows, Linux, macOS, Android, dan iOS."],
          ["Manajemen file", "Sistem operasi menyediakan mekanisme untuk membuat, menyimpan, mengatur, dan menghapus file."]
        ]
      },
      {
        title: "Aplikasi Komputer",
        lead: "Aplikasi komputer membantu pengguna menyelesaikan pekerjaan sesuai kebutuhan.",
        sections: [
          ["Aplikasi produktivitas", "Aplikasi produktivitas digunakan untuk mengolah dokumen, angka, dan presentasi."],
          ["Aplikasi pengembangan", "IDE dan editor kode membantu programmer menulis, menguji, dan memperbaiki program."],
          ["Keamanan perangkat lunak", "Pembaruan perangkat lunak dan penggunaan aplikasi terpercaya membantu mengurangi risiko keamanan."]
        ]
      }
    ]
  },
  {
    id: 4,
    code: "MK-04",
    title: "Sistem Bilangan dan Representasi Data",
    category: "Representasi Data",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
    description: "Memahami bilangan biner, desimal, oktal, heksadesimal, dan representasi data digital.",
    video: "https://www.youtube.com/embed/ku4KOFQ-bB4",
    chapters: [
      {
        title: "Sistem Bilangan",
        lead: "Komputer menggunakan sistem bilangan untuk merepresentasikan dan mengolah informasi.",
        sections: [
          ["Sistem desimal", "Sistem desimal memiliki basis sepuluh dan menggunakan angka 0 sampai 9."],
          ["Sistem biner", "Sistem biner menggunakan dua simbol, yaitu 0 dan 1. Sistem ini menjadi dasar representasi digital."],
          ["Sistem oktal dan heksadesimal", "Sistem oktal memiliki basis delapan, sedangkan heksadesimal memiliki basis enam belas."]
        ]
      },
      {
        title: "Konversi Bilangan",
        lead: "Konversi bilangan merupakan proses mengubah representasi suatu nilai ke basis lain.",
        sections: [
          ["Biner ke desimal", "Konversi dilakukan dengan menjumlahkan hasil perkalian setiap digit dengan pangkat dua sesuai posisinya."],
          ["Desimal ke biner", "Konversi dapat dilakukan menggunakan pembagian berulang dengan basis dua."],
          ["Representasi heksadesimal", "Heksadesimal menggunakan simbol 0 sampai 9 dan A sampai F untuk mewakili nilai 0 sampai 15."]
        ]
      },
      {
        title: "Representasi Data",
        lead: "Informasi digital disimpan dalam bentuk bit dan byte.",
        sections: [
          ["Bit dan byte", "Bit merupakan satuan data terkecil yang memiliki nilai 0 atau 1. Satu byte terdiri atas delapan bit."],
          ["Representasi karakter", "Standar seperti ASCII dan Unicode digunakan untuk merepresentasikan karakter."],
          ["Representasi gambar dan suara", "Gambar dan suara digital direpresentasikan melalui nilai numerik yang dapat diproses komputer."]
        ]
      }
    ]
  },
  {
    id: 5,
    code: "MK-05",
    title: "Jaringan Komputer dan Internet",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000",
    description: "Mempelajari jaringan komputer, perangkat jaringan, protokol, dan internet.",
    video: "https://www.youtube.com/embed/qiQR5rTSshw",
    chapters: [
      {
        title: "Dasar Jaringan",
        lead: "Jaringan komputer menghubungkan perangkat agar dapat bertukar data dan berbagi sumber daya.",
        sections: [
          ["Pengertian jaringan", "Jaringan komputer adalah kumpulan perangkat yang saling terhubung melalui media komunikasi."],
          ["Jenis jaringan", "LAN mencakup wilayah lokal, MAN mencakup wilayah metropolitan, sedangkan WAN mencakup wilayah geografis yang lebih luas."],
          ["Manfaat jaringan", "Jaringan memungkinkan komunikasi, pertukaran data, berbagi perangkat, dan akses layanan bersama."]
        ]
      },
      {
        title: "Perangkat Jaringan",
        lead: "Perangkat jaringan membantu proses komunikasi antarkomputer.",
        sections: [
          ["Router", "Router meneruskan paket data antarjaringan berdasarkan informasi alamat tujuan."],
          ["Switch", "Switch menghubungkan perangkat dalam jaringan lokal dan meneruskan frame berdasarkan alamat MAC."],
          ["Access point", "Access point menyediakan koneksi jaringan nirkabel bagi perangkat."]
        ]
      },
      {
        title: "Internet dan Protokol",
        lead: "Internet merupakan jaringan global yang menghubungkan berbagai jaringan komputer.",
        sections: [
          ["Alamat IP", "Alamat IP digunakan untuk mengidentifikasi antarmuka perangkat dalam jaringan IP."],
          ["Protokol HTTP", "HTTP merupakan protokol komunikasi yang digunakan dalam pertukaran data halaman web."],
          ["Keamanan jaringan", "Firewall, enkripsi, dan autentikasi merupakan beberapa mekanisme untuk meningkatkan keamanan jaringan."]
        ]
      }
    ]
  },
  {
    id: 6,
    code: "MK-06",
    title: "Algoritma dan Pemrograman",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000",
    description: "Mengenal algoritma, flowchart, variabel, percabangan, dan perulangan.",
    video: "https://www.youtube.com/embed/zOjov-2OZ0E",
    chapters: [
      {
        title: "Dasar Algoritma",
        lead: "Algoritma merupakan urutan langkah logis untuk menyelesaikan suatu permasalahan.",
        sections: [
          ["Pengertian algoritma", "Algoritma adalah prosedur sistematis yang memiliki langkah-langkah jelas untuk menghasilkan solusi."],
          ["Karakteristik algoritma", "Algoritma harus memiliki input, output, langkah yang jelas, dan dapat diselesaikan."],
          ["Pseudocode", "Pseudocode merupakan penulisan langkah algoritma menggunakan bahasa sederhana yang menyerupai kode program."]
        ]
      },
      {
        title: "Flowchart",
        lead: "Flowchart menggambarkan alur algoritma menggunakan simbol grafis.",
        sections: [
          ["Simbol flowchart", "Simbol oval digunakan untuk awal dan akhir, persegi panjang untuk proses, dan belah ketupat untuk keputusan."],
          ["Alur proses", "Flowchart menunjukkan hubungan antarlangkah dan arah proses melalui garis panah."],
          ["Manfaat flowchart", "Flowchart membantu programmer memahami alur solusi sebelum menulis kode."]
        ]
      },
      {
        title: "Dasar Pemrograman",
        lead: "Pemrograman menerjemahkan algoritma menjadi instruksi yang dapat dijalankan komputer.",
        sections: [
          ["Variabel dan tipe data", "Variabel menyimpan nilai, sedangkan tipe data menentukan jenis nilai yang dapat digunakan."],
          ["Percabangan", "Percabangan seperti if dan else memungkinkan program memilih tindakan berdasarkan kondisi."],
          ["Perulangan", "Perulangan seperti for dan while menjalankan instruksi berulang berdasarkan kondisi tertentu."]
        ]
      }
    ]
  }
];

/* =====================================================
   2. BANK SOAL - 48 PERTANYAAN
===================================================== */

const rawQuestions = [
  [
    [
      "Apa yang dimaksud dengan ilmu komputer?",
      ["Ilmu yang mempelajari komputasi dan pengolahan informasi", "Ilmu tumbuhan", "Ilmu bangunan", "Ilmu tata surya"],
      0,
      "Ilmu komputer mempelajari komputasi, algoritma, dan pengolahan informasi."
    ],
    [
      "Siapa yang dikenal sebagai perancang Analytical Engine?",
      ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
      1,
      "Charles Babbage merancang Analytical Engine sebagai konsep awal komputer mekanik."
    ],
    [
      "Apa fungsi utama komputer?",
      ["Hanya menampilkan gambar", "Mengolah data menjadi informasi", "Hanya menyimpan listrik", "Menggantikan semua manusia"],
      1,
      "Komputer menerima, memproses, menyimpan, dan menghasilkan informasi."
    ],
    [
      "Komponen komputer yang dapat disentuh disebut?",
      ["Software", "Brainware", "Hardware", "Database"],
      2,
      "Hardware adalah komponen fisik komputer."
    ],
    [
      "Apa yang dimaksud brainware?",
      ["Perangkat keras", "Manusia yang menggunakan komputer", "Sistem operasi", "Bahasa pemrograman"],
      1,
      "Brainware merupakan manusia yang menggunakan atau mengelola komputer."
    ],
    [
      "Manakah contoh perangkat lunak?",
      ["Keyboard", "Monitor", "Microsoft Word", "Mouse"],
      2,
      "Microsoft Word merupakan aplikasi perangkat lunak."
    ],
    [
      "Apa kepanjangan CPU?",
      ["Central Processing Unit", "Computer Program Utility", "Central Program User", "Control Processing Usage"],
      0,
      "CPU merupakan Central Processing Unit atau pusat pemrosesan instruksi."
    ],
    [
      "Data yang sudah diolah sehingga memiliki makna disebut?",
      ["Input", "Informasi", "Hardware", "Program"],
      1,
      "Informasi merupakan hasil pengolahan data yang memiliki makna."
    ]
  ],
  [
    [
      "Apa pengertian hardware?",
      ["Program komputer", "Perangkat fisik komputer", "Data digital", "Sistem operasi"],
      1,
      "Hardware adalah seluruh komponen fisik komputer."
    ],
    [
      "Komponen yang menjadi pusat pemrosesan instruksi adalah?",
      ["Monitor", "Keyboard", "CPU", "Printer"],
      2,
      "CPU bertugas menjalankan instruksi dan memproses data."
    ],
    [
      "Apa fungsi utama RAM?",
      ["Menyimpan data sementara", "Mencetak dokumen", "Menampilkan gambar", "Menghubungkan listrik"],
      0,
      "RAM menyimpan data sementara yang sedang digunakan komputer."
    ],
    [
      "Perangkat untuk memasukkan teks adalah?",
      ["Monitor", "Keyboard", "Speaker", "Proyektor"],
      1,
      "Keyboard merupakan perangkat input untuk memasukkan teks."
    ],
    [
      "Manakah yang termasuk perangkat output?",
      ["Mouse", "Scanner", "Monitor", "Keyboard"],
      2,
      "Monitor menampilkan hasil pemrosesan komputer."
    ],
    [
      "Apa fungsi motherboard?",
      ["Menghubungkan komponen komputer", "Mencetak dokumen", "Menyimpan file online", "Memutar audio"],
      0,
      "Motherboard menghubungkan berbagai komponen komputer."
    ],
    [
      "Perangkat penyimpanan non-volatile adalah?",
      ["RAM", "Cache", "SSD", "Register"],
      2,
      "SSD menyimpan data meskipun komputer dimatikan."
    ],
    [
      "Apa tugas ALU pada CPU?",
      ["Operasi aritmetika dan logika", "Menampilkan gambar", "Mengatur jaringan", "Mencetak data"],
      0,
      "ALU melakukan operasi aritmetika dan logika."
    ]
  ],
  [
    [
      "Apa pengertian software?",
      ["Perangkat keras", "Sekumpulan instruksi atau program", "Kabel komputer", "Perangkat input"],
      1,
      "Software adalah kumpulan instruksi untuk menjalankan komputer."
    ],
    [
      "Manakah contoh sistem operasi?",
      ["Microsoft Word", "Linux", "Photoshop", "Google Docs"],
      1,
      "Linux merupakan salah satu sistem operasi."
    ],
    [
      "Apa tugas utama sistem operasi?",
      ["Mengelola sumber daya komputer", "Mengganti perangkat keras", "Mencetak semua dokumen", "Membuat jaringan listrik"],
      0,
      "Sistem operasi mengelola prosesor, memori, file, dan perangkat komputer."
    ],
    [
      "Software untuk menjelajahi internet disebut?",
      ["Browser", "Compiler", "Database", "Driver"],
      0,
      "Browser digunakan untuk mengakses halaman web."
    ],
    [
      "Manakah aplikasi pengolah kata?",
      ["Microsoft Word", "VLC", "Windows", "BIOS"],
      0,
      "Microsoft Word digunakan untuk membuat dan mengedit dokumen."
    ],
    [
      "Apa fungsi antivirus?",
      ["Mengolah angka", "Mendeteksi dan menangani malware", "Membuat presentasi", "Mengatur monitor"],
      1,
      "Antivirus membantu mendeteksi dan menangani perangkat lunak berbahaya."
    ],
    [
      "Program penerjemah kode sumber disebut?",
      ["Compiler", "Browser", "Media player", "File manager"],
      0,
      "Compiler menerjemahkan kode sumber ke bentuk yang dapat dijalankan."
    ],
    [
      "Software yang dirancang untuk tugas tertentu disebut?",
      ["Hardware", "Application software", "Motherboard", "Kabel"],
      1,
      "Application software membantu pengguna melakukan tugas tertentu."
    ]
  ],
  [
    [
      "Sistem bilangan biner menggunakan angka?",
      ["0 dan 1", "0 sampai 9", "1 sampai 8", "A sampai F"],
      0,
      "Sistem biner hanya menggunakan simbol 0 dan 1."
    ],
    [
      "Berapakah nilai desimal dari biner 10?",
      ["1", "2", "3", "4"],
      1,
      "Biner 10 sama dengan desimal 2."
    ],
    [
      "Sistem bilangan desimal memiliki basis?",
      ["2", "8", "10", "16"],
      2,
      "Sistem desimal menggunakan sepuluh simbol."
    ],
    [
      "Satu bit memiliki berapa kemungkinan keadaan?",
      ["2", "4", "8", "16"],
      0,
      "Satu bit memiliki dua kemungkinan nilai: 0 atau 1."
    ],
    [
      "Satu byte terdiri atas berapa bit?",
      ["2", "4", "8", "16"],
      2,
      "Satu byte terdiri atas delapan bit."
    ],
    [
      "Sistem heksadesimal menggunakan basis?",
      ["2", "8", "10", "16"],
      3,
      "Heksadesimal memiliki basis 16."
    ],
    [
      "Representasi biner dari angka desimal 5 adalah?",
      ["010", "101", "110", "111"],
      1,
      "Angka desimal 5 direpresentasikan sebagai 101 dalam biner."
    ],
    [
      "Gerbang logika AND menghasilkan nilai 1 jika?",
      ["Semua input bernilai 1", "Semua input bernilai 0", "Salah satu input 0", "Input tidak tersedia"],
      0,
      "Gerbang AND menghasilkan 1 jika seluruh input bernilai 1."
    ]
  ],
  [
    [
      "Apa pengertian jaringan komputer?",
      ["Kumpulan perangkat yang saling terhubung", "Kumpulan aplikasi", "Penyimpanan tunggal", "Sistem operasi"],
      0,
      "Jaringan menghubungkan perangkat untuk bertukar data."
    ],
    [
      "Kepanjangan LAN adalah?",
      ["Local Area Network", "Large Access Node", "Long Area Number", "Local Application Network"],
      0,
      "LAN berarti Local Area Network."
    ],
    [
      "Perangkat yang menghubungkan beberapa jaringan adalah?",
      ["Keyboard", "Router", "Monitor", "Scanner"],
      1,
      "Router meneruskan paket data antarjaringan."
    ],
    [
      "Topologi dengan pusat koneksi disebut?",
      ["Bus", "Ring", "Star", "Mesh"],
      2,
      "Topologi star menghubungkan perangkat melalui perangkat pusat."
    ],
    [
      "Apa fungsi alamat IP?",
      ["Mengidentifikasi perangkat pada jaringan", "Meningkatkan resolusi", "Menyimpan file", "Mengatur suara"],
      0,
      "Alamat IP digunakan untuk mengidentifikasi antarmuka perangkat."
    ],
    [
      "Protokol yang digunakan untuk mengakses halaman web adalah?",
      ["HTTP", "SMTP", "Bluetooth", "BIOS"],
      0,
      "HTTP merupakan protokol komunikasi halaman web."
    ],
    [
      "Jaringan dengan cakupan geografis luas disebut?",
      ["LAN", "WAN", "PAN", "CAN"],
      1,
      "WAN menghubungkan jaringan dalam wilayah luas."
    ],
    [
      "Perangkat yang menghubungkan perangkat dalam LAN adalah?",
      ["Switch", "Printer", "Speaker", "Proyektor"],
      0,
      "Switch menghubungkan beberapa perangkat dalam jaringan lokal."
    ]
  ],
  [
    [
      "Apa yang dimaksud algoritma?",
      ["Urutan langkah logis menyelesaikan masalah", "Perangkat keras", "Bahasa desain", "Sistem operasi"],
      0,
      "Algoritma merupakan langkah sistematis untuk menyelesaikan masalah."
    ],
    [
      "Simbol flowchart untuk keputusan adalah?",
      ["Persegi", "Belah ketupat", "Lingkaran", "Segitiga"],
      1,
      "Belah ketupat merupakan simbol keputusan."
    ],
    [
      "Struktur untuk menjalankan instruksi berulang disebut?",
      ["Sequence", "Looping", "Input", "Output"],
      1,
      "Looping menjalankan instruksi berulang."
    ],
    [
      "Bahasa pemrograman yang populer untuk pemula adalah?",
      ["Python", "JPEG", "PDF", "MP3"],
      0,
      "Python memiliki sintaks yang relatif mudah dibaca."
    ],
    [
      "Apa fungsi variabel?",
      ["Menyimpan nilai atau data", "Mencetak dokumen", "Mengatur monitor", "Menghubungkan kabel"],
      0,
      "Variabel merupakan tempat menyimpan nilai."
    ],
    [
      "Struktur percabangan digunakan untuk?",
      ["Memilih tindakan berdasarkan kondisi", "Menyimpan gambar", "Menghapus hardware", "Menambah memori"],
      0,
      "Percabangan menentukan tindakan berdasarkan kondisi."
    ],
    [
      "Operator JavaScript untuk membandingkan nilai dan tipe adalah?",
      ["=", "===", "+", "%"],
      1,
      "Operator === membandingkan nilai sekaligus tipe data."
    ],
    [
      "Apa tujuan debugging?",
      ["Menemukan dan memperbaiki kesalahan program", "Membuat hardware", "Mengubah monitor", "Menghapus sistem operasi"],
      0,
      "Debugging merupakan proses menemukan dan memperbaiki kesalahan program."
    ]
  ]
];

const imageSets = [
  [
    "photo-1516321318423-f06f85e504b3",
    "photo-1451187580459-43490279c0fa",
    "photo-1519389950473-47ba0277781c"
  ],
  [
    "photo-1587202372775-e229f172b9d7",
    "photo-1591799264318-7e6ef8ddb7ea",
    "photo-1562976540-1502c2145186"
  ],
  [
    "photo-1515879218367-8466d910aaa4",
    "photo-1516321318423-f06f85e504b3",
    "photo-1461749280684-dccba630e2f6"
  ],
  [
    "photo-1518770660439-4636190af475",
    "photo-1509228468518-180dd4864904",
    "photo-1558494949-ef010cbdcc31"
  ],
  [
    "photo-1451187580459-43490279c0fa",
    "photo-1544197150-b99a580bb7a4",
    "photo-1558494949-ef010cbdcc31"
  ],
  [
    "photo-1461749280684-dccba630e2f6",
    "photo-1515879218367-8466d910aaa4",
    "photo-1555066931-4365d14bab8c"
  ]
];

const quizBank = Object.fromEntries(
  rawQuestions.map((questions, courseIndex) => [
    courseIndex + 1,
    questions.map((item, questionIndex) => ({
      question: item[0],
      options: item[1],
      correct: item[2],
      explanation: item[3],
      image: `https://images.unsplash.com/${imageSets[courseIndex][questionIndex % 3]}?w=1000&auto=format&fit=crop`
    }))
  ])
);

/* =====================================================
   3. STORAGE DAN UTILITAS
===================================================== */

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}

const totalQuestions = 48;

const formatTime = seconds => {
  const value = Math.max(0, seconds || 0);
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
};

function calculateResult(courseId, answers) {
  const courseAnswers = answers[courseId] || {};
  const questions = quizBank[courseId];

  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  questions.forEach((question, index) => {
    const answer = courseAnswers[index];

    if (answer === undefined || answer === null) {
      unanswered++;
    } else if (answer === question.correct) {
      correct++;
    } else {
      wrong++;
    }
  });

  return {
    correct,
    wrong,
    unanswered,
    total: questions.length,
    score: Math.round(correct / questions.length * 100),
    completed: unanswered === 0
  };
}

/* =====================================================
   4. APLIKASI UTAMA
===================================================== */

function App() {

  const [view, setView] = useState("dashboard");
  const [activeCourse, setActiveCourse] = useState(1);
  const [activeChapter, setActiveChapter] = useState(0);
  const [selectedQuizCourse, setSelectedQuizCourse] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);

  const [answers, setAnswers] = useState(
    () => loadStorage("edusmart-answers-v2", {})
  );

  const [quizTimes, setQuizTimes] = useState(
    () => loadStorage("edusmart-times-v2", {})
  );

  const [done, setDone] = useState(
    () => loadStorage("edusmart-done-v2", [])
  );

  const [bookmarks, setBookmarks] = useState(
    () => loadStorage("edusmart-bookmarks-v2", [])
  );

  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [expired, setExpired] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const [history, setHistory] = useState(
    () => loadStorage("edusmart-history-v2", {})
  );

  const course = courses.find(item => item.id === activeCourse);
  const chapter = course?.chapters[activeChapter];

  const activeQuestions = selectedQuizCourse
    ? quizBank[selectedQuizCourse]
    : [];

  const currentQuestion = activeQuestions[quizIndex];

  const currentAnswers = selectedQuizCourse
    ? answers[selectedQuizCourse] || {}
    : {};

  const currentTimes = selectedQuizCourse
    ? quizTimes[selectedQuizCourse] || {}
    : {};

  const currentAnswer = currentAnswers[quizIndex];

  const answeredCount = Object.values(answers).reduce(
    (sum, item) => sum + Object.keys(item).length,
    0
  );

  const globalCorrect = courses.reduce(
    (sum, item) => sum + calculateResult(item.id, answers).correct,
    0
  );

  const globalWrong = courses.reduce(
    (sum, item) => sum + calculateResult(item.id, answers).wrong,
    0
  );

  const globalUnanswered = totalQuestions - answeredCount;

  const globalScore = Math.round(
    globalCorrect / totalQuestions * 100
  );

  const materialProgress = Math.round(
    done.length / courses.length * 100
  );

  const quizProgress = Math.round(
    answeredCount / totalQuestions * 100
  );

  const overallProgress = Math.round(
    (done.length + answeredCount / 8) / (courses.length * 2) * 100
  );

  const averageTime = answeredCount
    ? Math.round(
        Object.values(quizTimes).reduce(
          (sum, item) =>
            sum + Object.values(item).reduce(
              (subtotal, time) => subtotal + time, 0
            ),
          0
        ) / answeredCount
      )
    : 0;

  /* =====================================
     PENYIMPANAN OTOMATIS
  ===================================== */

  useEffect(() => {
    saveStorage("edusmart-answers-v2", answers);
  }, [answers]);

  useEffect(() => {
    saveStorage("edusmart-times-v2", quizTimes);
  }, [quizTimes]);

  useEffect(() => {
    saveStorage("edusmart-done-v2", done);
  }, [done]);

  useEffect(() => {
    saveStorage("edusmart-bookmarks-v2", bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    saveStorage("edusmart-history-v2", history);
  }, [history]);

  /* =====================================
     NAVIGASI
  ===================================== */

  const go = page => {
    stopAudio();
    setView(page);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    ["dashboard", "Dashboard"],
    ["materi", "Materi"],
    ["multimedia", "Multimedia"],
    ["kuis", "Kuis"],
    ["evaluasi", "Evaluasi"],
    ["hasil", "Hasil & Progress"]
  ];

  /* =====================================
     AUDIO TEXT TO SPEECH
  ===================================== */

  const stopAudio = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setAudioPlaying(false);
  };

  const speak = (text, callback) => {
    if (!("speechSynthesis" in window)) {
      alert("Browser tidak mendukung fitur audio.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setAudioPlaying(true);

    utterance.onend = () => {
      setAudioPlaying(false);
      callback?.();
    };

    utterance.onerror = () => {
      setAudioPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakQuestion = () => {
    if (!currentQuestion || currentAnswer !== undefined) return;

    const text = `
      Pertanyaan nomor ${quizIndex + 1}.
      ${currentQuestion.question}.
      ${currentQuestion.options.map(
        (option, index) =>
          `Pilihan ${String.fromCharCode(65 + index)}. ${option}.`
      ).join(" ")}
    `;

    speak(text);
  };

  /* =====================================
     MATERI
  ===================================== */

  const openMaterial = id => {
    setActiveCourse(id);
    setActiveChapter(0);
    go("baca");
  };

  const completeMaterial = () => {
    setDone(old =>
      old.includes(activeCourse)
        ? old
        : [...old, activeCourse]
    );

    go("materi");
  };

  const toggleBookmark = id => {
    setBookmarks(old =>
      old.includes(id)
        ? old.filter(item => item !== id)
        : [...old, id]
    );
  };

  /* =====================================
     KUIS
  ===================================== */

  const openQuizCourse = id => {
    setSelectedQuizCourse(id);
    setQuizIndex(0);
    setSecondsLeft(20);
    setExpired(false);
    go("kuis-detail");
  };

  const answerQuestion = optionIndex => {
    if (
      currentAnswer !== undefined ||
      expired ||
      !currentQuestion
    ) return;

    const usedTime = 20 - secondsLeft;

    setAnswers(old => ({
      ...old,
      [selectedQuizCourse]: {
        ...(old[selectedQuizCourse] || {}),
        [quizIndex]: optionIndex
      }
    }));

    setQuizTimes(old => ({
      ...old,
      [selectedQuizCourse]: {
        ...(old[selectedQuizCourse] || {}),
        [quizIndex]: usedTime
      }
    }));

    stopAudio();
  };

  const nextQuestion = () => {
    if (currentAnswer === undefined) return;

    if (quizIndex < 7) {
      setQuizIndex(index => index + 1);
    } else {
      finishQuiz();
    }
  };

  const previousQuestion = () => {
    if (quizIndex > 0) {
      setQuizIndex(index => index - 1);
    }
  };

  const finishQuiz = () => {
    const result = calculateResult(selectedQuizCourse, answers);

    setHistory(old => ({
      ...old,
      [selectedQuizCourse]: {
        ...result,
        date: new Date().toISOString()
      }
    }));

    go("evaluasi");
  };

  const resetQuiz = id => {
    setAnswers(old => ({
      ...old,
      [id]: {}
    }));

    setQuizTimes(old => ({
      ...old,
      [id]: {}
    }));

    setHistory(old => {
      const updated = { ...old };
      delete updated[id];
      return updated;
    });

    setQuizIndex(0);
    setExpired(false);
    setSecondsLeft(20);
    setSelectedQuizCourse(id);
    go("kuis-detail");
  };

  /* =====================================
     TIMER 20 DETIK
  ===================================== */

  useEffect(() => {
    if (
      view !== "kuis-detail" ||
      !currentQuestion ||
      currentAnswer !== undefined
    ) return;

    setSecondsLeft(20);
    setExpired(false);

    const endTime = Date.now() + 20000;

    const timer = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil((endTime - Date.now()) / 1000)
      );

      setSecondsLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        setExpired(true);

        setAnswers(old => ({
          ...old,
          [selectedQuizCourse]: {
            ...(old[selectedQuizCourse] || {}),
            [quizIndex]: null
          }
        }));

        setQuizTimes(old => ({
          ...old,
          [selectedQuizCourse]: {
            ...(old[selectedQuizCourse] || {}),
            [quizIndex]: 20
          }
        }));
      }
    }, 200);

    return () => clearInterval(timer);

  }, [
    view,
    selectedQuizCourse,
    quizIndex,
    currentAnswer,
    currentQuestion
  ]);

  /* =====================================
     HASIL PER MATA KULIAH
  ===================================== */

  const courseResults = courses.map(item => ({
    ...item,
    ...calculateResult(item.id, answers),
    answered: Object.keys(answers[item.id] || {}).length,
    time: Object.values(quizTimes[item.id] || {}).reduce(
      (sum, value) => sum + value, 0
    )
  }));

  const filteredCourses = courses.filter(item =>
    `${item.title} ${item.category} ${item.code}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* =====================================================
     5. TAMPILAN UTAMA
  ===================================================== */

  return (

    <div className="site-shell">

      {/* NAVBAR STICKY */}

      <header className="topbar">

        <button className="brand" onClick={() => go("dashboard")}>
          <span className="brand-mark">E</span>
          EduSmart<span className="brand-light">.</span>
        </button>

        <nav className={`nav-links ${mobileMenu ? "show" : ""}`}>

          {navItems.map(([id, label], index) => (
            <button
              key={id}
              className={`nav-link ${
                view === id ||
                (id === "materi" && view === "baca") ||
                (id === "kuis" && view === "kuis-detail")
                  ? "active"
                  : ""
              }`}
              onClick={() => go(id)}
            >
              {label}

              {id === "materi" && (
                <span className="nav-count">{done.length}</span>
              )}

              {id === "kuis" && (
                <span className="nav-count">{answeredCount}/48</span>
              )}
            </button>
          ))}

        </nav>

        <div className="top-right">
          <span className="semester">SEMESTER / 2026</span>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Buka menu navigasi"
          >
            {mobileMenu ? "×" : "☰"}
          </button>
        </div>

      </header>

      {/* =====================================
          DASHBOARD
      ===================================== */}

      {view === "dashboard" && (

        <>

          <section className="hero">

            <div>

              <div className="eyebrow">
                <span className="eyebrow-line"/>
                DIGITAL LEARNING / ILMU KOMPUTER
              </div>

              <h1>
                Belajar dengan
                <br/>
                <em>cara berbeda.</em>
              </h1>

              <p className="hero-desc">
                Ruang belajar digital untuk mahasiswa Ilmu Komputer.
                Pelajari materi, pahami konsep, dengarkan penjelasan,
                dan uji pemahaman melalui latihan interaktif.
              </p>

              <div className="hero-actions">
                <button
                  className="button-dark"
                  onClick={() => go("materi")}
                >
                  Mulai belajar <span>→</span>
                </button>

                <span className="hero-note">
                  06 <i>/</i> MATA KULIAH
                </span>
              </div>

            </div>

            <div className="hero-art">

              <span className="art-index">
                VISUAL STUDY / 001
              </span>

              <div className="art-photo">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
                  alt="Suasana belajar komputer"
                />
              </div>

              <div className="art-stamp">
                Learn
                <br/>
                & Grow
                <span>EDUSMART</span>
              </div>

              <span className="art-caption">
                DIGITAL EDUCATION
                <br/>
                COMPUTER SCIENCE
              </span>

              <span className="art-number">01 — 06</span>

            </div>

          </section>

          <section className="continue-strip">

            <div>
              <span className="eyebrow">YOUR LEARNING JOURNEY</span>
              <h2>Lanjutkan perjalanan belajar.</h2>
            </div>

            <div className="progress-wrap">

              <div className="progress-meta">
                <span>Progres keseluruhan</span>
                <strong>{overallProgress}%</strong>
              </div>

              <div className="progress-track">
                <span style={{ width: `${overallProgress}%` }}/>
              </div>

              <small>
                {done.length} materi selesai · {answeredCount}/48 soal dijawab
              </small>

            </div>

          </section>

          <section className="curriculum">

            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / YOUR CURRICULUM</span>
                <h2>Mulai dari sini.</h2>
              </div>

              <button className="text-link" onClick={() => go("materi")}>
                Semua materi →
              </button>
            </div>

            <div className="lesson-grid">

              {courses.slice(0, 3).map(item => (

                <button
                  className="lesson-card"
                  key={item.id}
                  onClick={() => openMaterial(item.id)}
                >

                  <div className="card-image">
                    <img src={item.image} alt={item.title}/>

                    <span className="card-number">
                      {item.code}
                    </span>

                    {done.includes(item.id) && (
                      <span className="completed">✓ SELESAI</span>
                    )}
                  </div>

                  <div className="card-content">

                    <div className="card-meta">
                      <span>{item.category}</span>
                      <span>3 BAB</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="card-open">
                      <span>Buka materi</span>
                      <span>→</span>
                    </div>

                  </div>

                </button>

              ))}

            </div>

          </section>

        </>

      )}

      {/* =====================================
          MATERI
      ===================================== */}

      {view === "materi" && (

        <main className="inner-page">

          <div className="page-intro">
            <span className="eyebrow">02 / DIGITAL LIBRARY</span>
            <h1>Ruang <em>belajar.</em></h1>
            <p>
              Pilih mata kuliah untuk membuka materi pembelajaran.
              Setiap kategori memiliki penjelasan, ilustrasi, dan video.
            </p>
          </div>

          <div className="course-toolbar">

            <div>
              <span className="course-total">06</span>
              <span className="course-total-label">MATA KULIAH</span>
            </div>

            <div className="course-search">
              <span>⌕</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Cari mata kuliah..."
              />
            </div>

          </div>

          <div className="course-grid">

            {filteredCourses.map(item => (

              <button
                className="course-card"
                key={item.id}
                onClick={() => openMaterial(item.id)}
              >

                <div className="course-image">

                  <img src={item.image} alt={item.title}/>

                  <span className="course-code">{item.code}</span>
                  <span className="course-arrow">↗</span>

                  {done.includes(item.id) && (
                    <span className="course-completed">SELESAI</span>
                  )}

                </div>

                <div className="course-content">

                  <span className="course-category">
                    {item.category}
                  </span>

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                  <div className="course-meta">
                    <span>03 BAB</span>
                    <span>8 SOAL KUIS</span>
                  </div>

                  <div className="course-open">
                    <span>Pelajari materi</span>
                    <span>→</span>
                  </div>

                </div>

              </button>

            ))}

          </div>

          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <h3>Materi tidak ditemukan.</h3>
              <p>Coba gunakan kata pencarian yang berbeda.</p>
            </div>
          )}

        </main>

      )}

      {/* =====================================
          BACA MATERI
      ===================================== */}

      {view === "baca" && course && chapter && (

        <main className="reading-page">

          <div className="reading-top">

            <button className="back-link" onClick={() => go("materi")}>
              ← Kembali ke materi
            </button>

            <span className="reading-location">
              {course.code} <i>/</i> BAB {activeChapter + 1}
            </span>

          </div>

          <div className="reading-layout">

            <aside className="chapter-rail">

              <span className="eyebrow">DAFTAR BAB</span>

              {course.chapters.map((item, index) => (
                <button
                  key={index}
                  className={`rail-item ${
                    activeChapter === index ? "selected" : ""
                  }`}
                  onClick={() => {
                    setActiveChapter(index);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span>0{index + 1}</span>
                  {item.title}
                </button>
              ))}

              <button
                className="rail-item"
                onClick={() => toggleBookmark(course.id)}
              >
                <span>☆</span>
                {bookmarks.includes(course.id)
                  ? "Hapus bookmark"
                  : "Simpan bookmark"}
              </button>

            </aside>

            <article className="article">

              <div className="article-meta">
                <span>{course.code}</span>
                <span> BAB 0{activeChapter + 1}</span>
              </div>

              <h1>
                {chapter.title}<span className="title-period">.</span>
              </h1>

              <p className="article-lead">{chapter.lead}</p>

              <div className="article-tools">

                <button
                  className="tool-button"
                  onClick={() => speak(
                    `${chapter.title}. ${chapter.lead}. ${
                      chapter.sections.map(section =>
                        `${section[0]}. ${section[1]}`
                      ).join(". ")
                    }`
                  )}
                >
                  ♫ Dengarkan materi
                </button>

                <button
                  className={`tool-button ${
                    bookmarks.includes(course.id) ? "selected" : ""
                  }`}
                  onClick={() => toggleBookmark(course.id)}
                >
                  ☆ {bookmarks.includes(course.id) ? "Tersimpan" : "Bookmark"}
                </button>

              </div>

              <figure className="article-figure">
                <img src={course.image} alt={course.title}/>
                <figcaption>
                  <span>FIG. 0{activeChapter + 1}</span>
                  <span>Ilustrasi {course.title}</span>
                </figcaption>
              </figure>

              <div className="article-body">

                {chapter.sections.map((section, index) => (
                  <section className="text-section" key={index}>

                    <span className="paragraph-index">
                      0{index + 1}
                    </span>

                    <div>
                      <h2>{section[0]}</h2>
                      <p>{section[1]}</p>
                    </div>

                  </section>
                ))}

              </div>

              <div className="key-note">
                <span>KEY CONCEPT</span>
                <p>{chapter.lead}</p>
              </div>

              <div className="chapter-end">

                <button
                  className="button-outline"
                  disabled={activeChapter === 0}
                  onClick={() => setActiveChapter(index => index - 1)}
                >
                  ← Bab sebelumnya
                </button>

                {activeChapter < 2 ? (
                  <button
                    className="button-dark"
                    onClick={() => setActiveChapter(index => index + 1)}
                  >
                    Bab selanjutnya →
                  </button>
                ) : (
                  <button
                    className="button-dark"
                    onClick={completeMaterial}
                  >
                    Tandai materi selesai ✓
                  </button>
                )}

              </div>

            </article>

          </div>

        </main>

      )}

      {/* =====================================
          MULTIMEDIA
      ===================================== */}

      {view === "multimedia" && (

        <main className="inner-page">

          <div className="page-intro">
            <span className="eyebrow">03 / LEARNING MEDIA</span>
            <h1>Belajar melalui <em>media.</em></h1>
            <p>
              Gunakan kombinasi teks, gambar, video, dan audio
              untuk memahami konsep ilmu komputer.
            </p>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari media pembelajaran..."
            />
          </div>

          {courses.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map(item => (

            <div className="media-course" key={item.id}>

              <div className="media-course-heading">
                <span className="eyebrow">{item.code}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <div className="media-course-grid">

                <figure className="media-image">
                  <img src={item.image} alt={item.title}/>
                  <figcaption>01 / VISUAL MATERIAL</figcaption>
                </figure>

                <div className="media-video">
                  <div className="video-heading">
                    <h2>Video pembelajaran</h2>
                    <span className="video-label">02 / VIDEO</span>
                  </div>

                  <div className="video-frame">
                    <iframe
                      src={item.video}
                      title={`Video ${item.title}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                </div>

              </div>

              <div className="media-audio">
                <div>
                  <span className="eyebrow">03 / AUDIO</span>
                  <h3>Narasi materi</h3>
                  <p>Dengarkan ringkasan materi melalui narasi suara.</p>
                </div>

                <button
                  className="button-dark"
                  onClick={() => speak(
                    item.title + ". " + item.description + ". " +
                    item.chapters.map(ch =>
                      ch.title + ". " + ch.lead
                    ).join(". ")
                  )}
                >
                  ♫ Dengarkan
                </button>

              </div>

            </div>

          ))}

        </main>

      )}

      {/* =====================================
          KATALOG KUIS
      ===================================== */}

      {view === "kuis" && (

        <main className="inner-page">

          <div className="page-intro">
            <span className="eyebrow">04 / ASSESSMENT CENTER</span>
            <h1>Uji <em>pemahaman.</em></h1>
            <p>
              Pilih mata kuliah untuk mengerjakan kuis.
              Setiap kategori memiliki delapan pertanyaan,
              gambar, audio, dan batas waktu 20 detik.
            </p>
          </div>

          <div className="course-toolbar">

            <div>
              <span className="course-total">06</span>
              <span className="course-total-label">KATEGORI KUIS</span>
            </div>

            <span className="quiz-total-info">
              48 SOAL / 20 DETIK PER SOAL
            </span>

          </div>

          <div className="course-grid">

            {courses.map(item => {

              const result = calculateResult(item.id, answers);
              const answered = 8 - result.unanswered;

              return (

                <button
                  className="course-card quiz-course-card"
                  key={item.id}
                  onClick={() => openQuizCourse(item.id)}
                >

                  <div className="course-image">
                    <img src={item.image} alt={item.title}/>
                    <span className="course-code">{item.code}</span>
                    <span className="course-arrow">↗</span>
                  </div>

                  <div className="course-content">

                    <span className="course-category">
                      QUIZ / {item.category}
                    </span>

                    <h2>{item.title}</h2>

                    <p>
                      Delapan soal latihan untuk mengukur pemahaman
                      materi {item.title.toLowerCase()}.
                    </p>

                    <div className="quiz-card-stats">

                      <div>
                        <strong>08</strong>
                        <span>SOAL</span>
                      </div>

                      <div>
                        <strong>20s</strong>
                        <span>WAKTU</span>
                      </div>

                      <div>
                        <strong>{result.score}%</strong>
                        <span>NILAI</span>
                      </div>

                    </div>

                    <div className="quiz-card-progress">

                      <div className="quiz-progress-meta">
                        <span>Progress pengerjaan</span>
                        <span>{answered}/8</span>
                      </div>

                      <div className="progress-track">
                        <span style={{ width: `${answered / 8 * 100}%` }}/>
                      </div>

                    </div>

                    <div className="course-open">
                      <span>
                        {result.completed ? "Lihat / ulangi kuis" : "Mulai latihan"}
                      </span>
                      <span>→</span>
                    </div>

                  </div>

                </button>

              );

            })}

          </div>

        </main>

      )}

      {/* =====================================
          PENGERJAAN KUIS
      ===================================== */}

      {view === "kuis-detail" && currentQuestion && (

        <main className="inner-page quiz-detail-page">

          <div className="quiz-detail-top">

            <button className="back-link" onClick={() => go("kuis")}>
              ← Kembali ke daftar kuis
            </button>

            <span className="reading-location">
              {courses[selectedQuizCourse - 1].code} / QUIZ
            </span>

          </div>

          <div className="quiz-detail-heading">

            <span className="eyebrow">
              {courses[selectedQuizCourse - 1].code} / LATIHAN
            </span>

            <h1>
              {courses[selectedQuizCourse - 1].title}
              <span className="title-period">.</span>
            </h1>

            <p>
              Delapan pertanyaan. Dua puluh detik setiap soal.
              Perhatikan gambar dan dengarkan audio sebelum menjawab.
            </p>

          </div>

          <div className="question-navigation">

            <div className="question-navigation-head">
              <span>DAFTAR PERTANYAAN</span>
              <strong>{quizIndex + 1} / 8</strong>
            </div>

            <div className="question-number-list">

              {activeQuestions.map((item, index) => {

                const answered = currentAnswers[index] !== undefined;

                return (
                  <button
                    key={index}
                    className={`question-number ${
                      index === quizIndex ? "current" : ""
                    } ${answered ? "answered" : ""}`}
                    onClick={() => {
                      stopAudio();
                      setQuizIndex(index);
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                );
              })}

            </div>

          </div>

          <section className="interactive-quiz">

            <div className="interactive-quiz-header">
              <span className="eyebrow">
                PERTANYAAN {String(quizIndex + 1).padStart(2, "0")}
              </span>
              <span className="question-course-label">
                {courses[selectedQuizCourse - 1].category}
              </span>
            </div>

            <div className="quiz-timer">

              <div>
                <span className="timer-info">◷ WAKTU MENJAWAB</span>
                <small>Batas waktu 20 detik</small>
              </div>

              <strong className={`timer-value ${secondsLeft <= 5 ? "danger" : ""}`}>
                {formatTime(secondsLeft)}
              </strong>

            </div>

            <div className="timer-track">
              <div
                className="timer-fill"
                style={{ width: `${secondsLeft / 20 * 100}%` }}
              />
            </div>

            <figure className="question-figure">
              <img src={currentQuestion.image} alt="Ilustrasi soal"/>
              <figcaption>
                <span>VISUAL LEARNING</span>
                <span>ILUSTRASI PERTANYAAN</span>
              </figcaption>
            </figure>

            <div className="question-content">

              <span className="eyebrow">
                PILIH JAWABAN YANG PALING TEPAT
              </span>

              <h2>{currentQuestion.question}</h2>

              <button
                className="quiz-audio-button"
                disabled={currentAnswer !== undefined}
                onClick={speakQuestion}
              >
                ♫ {audioPlaying ? "Audio diputar" : "Dengarkan pertanyaan"}
              </button>

            </div>

            <div className="interactive-options">

              {currentQuestion.options.map((option, index) => {

                const selected = currentAnswer === index;
                const answered = currentAnswer !== undefined;
                const correct = currentQuestion.correct === index;

                return (

                  <button
                    key={index}
                    disabled={answered}
                    className={`interactive-option ${
                      answered && correct ? "option-correct" : ""
                    } ${
                      selected && !correct ? "option-wrong" : ""
                    }`}
                    onClick={() => answerQuestion(index)}
                  >

                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="option-text">{option}</span>

                    {answered && correct && (
                      <span className="option-status">✓</span>
                    )}

                    {selected && !correct && (
                      <span className="option-status">✕</span>
                    )}

                  </button>

                );

              })}

            </div>

            {currentAnswer !== undefined && (

              <div className={
                currentAnswer === null
                  ? "quiz-feedback"
                  : currentAnswer === currentQuestion.correct
                    ? "quiz-feedback correct"
                    : "quiz-feedback"
              }>

                <strong>
                  {currentAnswer === null
                    ? "Waktu habis!"
                    : currentAnswer === currentQuestion.correct
                      ? "Jawaban benar!"
                      : "Jawaban belum tepat."}
                </strong>

                <p>{currentQuestion.explanation}</p>

                <small>
                  Waktu menjawab: {
                    formatTime(currentTimes[quizIndex] ?? 20)
                  }
                </small>

              </div>

            )}

            <div className="quiz-navigation-bottom">

              <button
                className="button-outline"
                disabled={quizIndex === 0}
                onClick={previousQuestion}
              >
                ← Sebelumnya
              </button>

              <span className="question-progress-text">
                {Object.keys(currentAnswers).length}/8 TERJAWAB
              </span>

              <button
                className="button-dark"
                disabled={currentAnswer === undefined}
                onClick={nextQuestion}
              >
                {quizIndex === 7 ? "Lihat hasil →" : "Berikutnya →"}
              </button>

            </div>

          </section>

        </main>

      )}

      {/* =====================================
          EVALUASI
      ===================================== */}

      {view === "evaluasi" && (

        <main className="inner-page">

          <div className="page-intro">
            <span className="eyebrow">05 / EVALUATION</span>
            <h1>Hasil <em>evaluasi.</em></h1>
            <p>
              Ringkasan nilai dan hasil pengerjaan kuis
              berdasarkan masing-masing mata kuliah.
            </p>
          </div>

          {selectedQuizCourse && (() => {

            const result = calculateResult(selectedQuizCourse, answers);
            const item = courses.find(
              courseItem => courseItem.id === selectedQuizCourse
            );

            return (

              <section className="evaluation-result">

                <span className="eyebrow">HASIL KUIS / {item.code}</span>

                <h2>{item.title}</h2>

                <div className="evaluation-score">
                  {result.score}
                </div>

                <span className="evaluation-unit">
                  NILAI / 100
                </span>

                <div className="evaluation-line"/>

                <p>
                  {result.score >= 80
                    ? "Sangat baik! Kamu telah memahami sebagian besar materi."
                    : result.score >= 60
                      ? "Cukup baik. Pelajari kembali bagian yang masih belum dikuasai."
                      : "Terus berlatih dan pelajari kembali materi sebelum mengulang kuis."}
                </p>

                <div className="evaluation-details">

                  <div>
                    <strong>{result.correct}</strong>
                    <span>Benar</span>
                  </div>

                  <div>
                    <strong>{result.wrong}</strong>
                    <span>Salah</span>
                  </div>

                  <div>
                    <strong>{result.unanswered}</strong>
                    <span>Tidak dijawab</span>
                  </div>

                </div>

                <div className="evaluation-details">

                  <div>
                    <strong>08</strong>
                    <span>Total soal</span>
                  </div>

                  <div>
                    <strong>{Math.round(
                      Object.values(quizTimes[selectedQuizCourse] || {})
                        .reduce((sum, time) => sum + time, 0) / 60
                    )}</strong>
                    <span>Menit digunakan</span>
                  </div>

                  <div>
                    <strong>20s</strong>
                    <span>Per soal</span>
                  </div>

                </div>

                <button
                  className="button-dark"
                  onClick={() => resetQuiz(selectedQuizCourse)}
                >
                  Ulangi kuis →
                </button>

                <button
                  className="button-outline"
                  onClick={() => go("hasil")}
                >
                  Lihat hasil & progress
                </button>

              </section>

            );

          })()}

          <div className="section-heading">
            <div>
              <span className="eyebrow">ALL COURSES</span>
              <h2>Evaluasi mata kuliah.</h2>
            </div>
          </div>

          <div className="results-course-list">

            {courseResults.map(item => (

              <div className="library-row" key={item.id}>

                <span className="library-unit">{item.code}</span>

                <span className="library-main">
                  <strong>{item.title}</strong>
                  <small>
                    {item.correct} benar · {item.wrong} salah ·
                    {item.unanswered} belum dijawab
                  </small>
                </span>

                <strong className="course-score">
                  {item.score}/100
                </strong>

                <button
                  className="text-link"
                  onClick={() => {
                    setSelectedQuizCourse(item.id);
                    go("evaluasi");
                  }}
                >
                  Detail →
                </button>

              </div>

            ))}

          </div>

        </main>

      )}

      {/* =====================================
          HASIL DAN PROGRESS
      ===================================== */}

      {view === "hasil" && (

        <main className="inner-page">

          <div className="page-intro">
            <span className="eyebrow">06 / LEARNING ANALYTICS</span>
            <h1>Hasil & <em>progress.</em></h1>
            <p>
              Pantau perkembangan pembelajaran, hasil kuis,
              tingkat ketepatan jawaban, dan pencapaian setiap mata kuliah.
            </p>
          </div>

          {/* STATISTIK UTAMA */}

          <div className="results-grid">

            <div className="stat-card">
              <span className="stat-label">TOTAL MATERI</span>
              <strong>{done.length}/6</strong>
              <small>Materi telah diselesaikan</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">SOAL DIJAWAB</span>
              <strong>{answeredCount}/48</strong>
              <small>Jumlah soal yang telah dikerjakan</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">JAWABAN BENAR</span>
              <strong>{globalCorrect}</strong>
              <small>Jawaban tepat dari seluruh kuis</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">NILAI KESELURUHAN</span>
              <strong>{globalScore}</strong>
              <small>Dari total 48 pertanyaan</small>
            </div>

          </div>

          {/* GRAFIK RINGKASAN */}

          <div className="results-chart-grid">

            <section className="chart-panel">

              <span className="eyebrow">01 / ANSWER ANALYSIS</span>

              <h2>Komposisi jawaban.</h2>

              <div className="donut-wrapper">

                <div
                  className="donut-chart"
                  style={{
                    background: `conic-gradient(
                      var(--green) 0% ${globalCorrect / totalQuestions * 100}%,
                      var(--orange) ${globalCorrect / totalQuestions * 100}% ${(globalCorrect + globalWrong) / totalQuestions * 100}%,
                      #bdbbb1 ${(globalCorrect + globalWrong) / totalQuestions * 100}% 100%
                    )`
                  }}
                >

                  <div className="donut-center">
                    <strong>{globalScore}%</strong>
                    <span>AKURASI</span>
                  </div>

                </div>

              </div>

              <div className="chart-legend">
                <span><i className="legend-green"/> Benar ({globalCorrect})</span>
                <span><i className="legend-orange"/> Salah ({globalWrong})</span>
                <span><i className="legend-grey"/> Belum dijawab ({globalUnanswered})</span>
              </div>

            </section>

            <section className="chart-panel">

              <span className="eyebrow">02 / LEARNING PROGRESS</span>

              <h2>Penyelesaian pembelajaran.</h2>

              <div className="progress-chart">

                <div className="progress-row">
                  <div className="progress-row-title">
                    <strong>Materi pembelajaran</strong>
                  </div>

                  <div className="chart-bar-line">
                    <span>Selesai</span>
                    <div className="bar-track">
                      <div
                        className="bar-fill material-fill"
                        style={{ width: `${materialProgress}%` }}
                      />
                    </div>
                    <small>{materialProgress}%</small>
                  </div>
                </div>

                <div className="progress-row">
                  <div className="progress-row-title">
                    <strong>Latihan kuis</strong>
                  </div>

                  <div className="chart-bar-line">
                    <span>Dijawab</span>
                    <div className="bar-track">
                      <div
                        className="bar-fill quiz-fill"
                        style={{ width: `${quizProgress}%` }}
                      />
                    </div>
                    <small>{quizProgress}%</small>
                  </div>
                </div>

                <div className="progress-row">
                  <div className="progress-row-title">
                    <strong>Progress keseluruhan</strong>
                  </div>

                  <div className="chart-bar-line">
                    <span>Progres</span>
                    <div className="bar-track">
                      <div
                        className="bar-fill material-fill"
                        style={{ width: `${overallProgress}%` }}
                      />
                    </div>
                    <small>{overallProgress}%</small>
                  </div>
                </div>

              </div>

            </section>

          </div>

          {/* GRAFIK NILAI PER MATA KULIAH */}

          <section className="chart-panel chapter-chart">

            <span className="eyebrow">03 / COURSE PERFORMANCE</span>
            <h2>Perbandingan hasil kuis.</h2>

            <p className="chart-description">
              Grafik menunjukkan nilai setiap mata kuliah berdasarkan
              delapan pertanyaan yang tersedia.
            </p>

            <div className="progress-chart">

              {courseResults.map(item => (

                <div className="progress-row" key={item.id}>

                  <div className="progress-row-title">
                    <span>{item.code}</span>
                    <strong>{item.title}</strong>
                  </div>

                  <div className="chart-bar-group">

                    <div className="chart-bar-line">
                      <span>Nilai</span>
                      <div className="bar-track">
                        <div
                          className="bar-fill quiz-fill"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                      <small>{item.score}</small>
                    </div>

                    <div className="chart-bar-line">
                      <span>Materi</span>
                      <div className="bar-track">
                        <div
                          className="bar-fill material-fill"
                          style={{
                            width: done.includes(item.id) ? "100%" : "0%"
                          }}
                        />
                      </div>
                      <small>
                        {done.includes(item.id) ? 100 : 0}%
                      </small>
                    </div>

                  </div>

                  <p className="course-result-summary">
                    {item.answered}/8 dijawab · {item.correct} benar ·
                    {item.wrong} salah · {item.unanswered} tidak dijawab
                  </p>

                </div>

              ))}

            </div>

          </section>

          {/* WAKTU BELAJAR */}

          <div className="results-grid">

            <div className="stat-card">
              <span className="stat-label">RATA-RATA WAKTU</span>
              <strong>{formatTime(averageTime)}</strong>
              <small>Waktu per pertanyaan yang sudah dijawab</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">AKURASI JAWABAN</span>
              <strong>{answeredCount ? Math.round(globalCorrect / answeredCount * 100) : 0}%</strong>
              <small>Persentase jawaban benar dari soal dijawab</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">BELUM DIJAWAB</span>
              <strong>{globalUnanswered}</strong>
              <small>Pertanyaan yang belum dikerjakan</small>
            </div>

            <div className="stat-card">
              <span className="stat-label">BOOKMARK</span>
              <strong>{bookmarks.length}</strong>
              <small>Materi yang disimpan</small>
            </div>

          </div>

          {/* RIWAYAT PERKULIAHAN */}

          <section className="history-section">

            <div className="section-heading">
              <div>
                <span className="eyebrow">04 / COURSE HISTORY</span>
                <h2>Riwayat pembelajaran.</h2>
              </div>
            </div>

            {courses.map(item => {

              const result = calculateResult(item.id, answers);

              const times = Object.values(
                quizTimes[item.id] || {}
              );

              const totalTime = times.reduce(
                (sum, time) => sum + time, 0
              );

              return (

                <div className="library-row" key={item.id}>

                  <span className="library-unit">{item.code}</span>

                  <span className="library-main">

                    <strong>{item.title}</strong>

                    <small>
                      Materi: {done.includes(item.id) ? "Selesai" : "Belum selesai"}
                      {" · "}
                      Kuis: {Object.keys(answers[item.id] || {}).length}/8
                      {" · "}
                      Benar: {result.correct}
                    </small>

                  </span>

                  <span className="library-time">
                    {formatTime(totalTime)}
                  </span>

                  <strong className="course-score">
                    {result.score}
                  </strong>

                </div>

              );

            })}

          </section>

        </main>

      )}

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="footer">
        <span>EDUSMART © 2026</span>
        <span>RUANG BELAJAR DIGITAL / ILMU KOMPUTER</span>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
    
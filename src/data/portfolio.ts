export const personalInfo = {
  name: "Arka Mitra",
  email: "arka.mitra@alumni.ethz.ch",
  about: `I'm an ETH Zürich graduate with a Swiss B permit and immediate availability for engineering roles. With experience spanning NLP, Computer Vision, and Software Engineering, I've built production-grade systems that serve thousands of users daily. My background includes optimizing LLM latency by 65%, developing multi-sensor fusion pipelines for robotics, and creating full-stack applications for financial analytics. Whether it's reducing query latency from 3.4s to 1.2s, building automated trading systems, or teaching robots to play soccer—I love solving complex technical challenges. I bring both theoretical depth from my ETH education and practical experience from industry roles at Microsoft, Telepathy Labs, and leading technical teams. Ready to contribute from day one with proven skills in Python, C++, PyTorch, and modern MLOps practices.`,
  socials: {
    scholar: "https://scholar.google.com/citations?user=gitjk44AAAAJ&hl=en",
    twitter: "https://x.com/ArkaMitra16",
    github: "https://github.com/thearkamitra",
    linkedin: "https://www.linkedin.com/in/thearkamitra",
  },
  cvs: {
    general: "/data/CV_Arka_Mitra.pdf",
    academic: "/data/CV_Arka_Mitra_Academic.pdf",
    industry: "/data/CV_Arka_Mitra_Industry.pdf",
    research: "/data/CV_Arka_Mitra_Research.pdf",
  }
};

export const news = [
  {
    date: "2025",
    content: "One of the finalists at Swiss AI Hackathon 2025.",
    type: "award"
  },
  {
    date: "2024",
    content: "Joined Telepathy Labs as a Research Engineer, working on optimizing LLM latency and building production-grade systems.",
    type: "event"
  },
  { date: "2024",
    content: "Won third place at event organized by Graduate Consulting Club of ETH Zurich.",
    type: "award"    
  },
  {
    date: "2024",
    content: "Won second place at Datathon 2024 by ETH Zurich.",
    type: "award"
  },
  {
    date: "2024",
    content: "NomadZ exhibited at United Nations AI for Good Global Summit 2024.",
    type: "event"
  },
  {
    date: "2024",
    content: "Joined Dr. Blumer and Partners as a Quantitative Analyst.",
    type: "event"
  },
  {
    date: "2023",
    content: "Graduated from ETH Zurich with a Master's in Information Technology and Electrical Engineering.",
    type: "event"
  },
  {
    date: "2023",
    content: "Multi-Domain Referee Dataset: Enabling Recognition of Referee Signals on Robotic Platforms was accepted in CoRL 2023.",
    type: "robotics"
  },
  {
    date: "2023",
    content: "Optimizing Long-Term Player Tracking and Identification in NAO Robot Soccer by fusing Game-state and External Video was accepted in ICRA 2023.",
    type: "robotics"
  },
  {
    date: "2023",
    content: "NomadZ visited Hamburg for GORE 2023.",
    type: "event"
  },
  {
    date: "2023",
    content: "Received grants from NCCR Automation and KIM for NomadZ.",
    type: "award"
  },
  {
    date: "2022",
    content: "Causality Detection using Multiple Annotation Decisions was accepted to EMNLP 2022.",
    type: "nlp"
  },
  {
    date: "2022",
    content: "One of the finalists at HackZurich 2022.",
    type: "award"
  },
  {
    date: "2022",
    content: "NomadZ visited Bangkok for RoboCup 2022.",
    type: "event"
  },
  {
    date: "2022",
    content: "Helped organize Medical Imaging using Deep Learning conference 2022.",
    type: "event"
  },
  {
    date: "2022",
    content: "Joined the computer vision group of NomadZ.",
    type: "event"
  },
  {
    date: "2021",
    content: "Started Masters at ETH Zurich.",
    type: "event"
  },
  {
    date: "2021",
    content: "Applied and Data Scientist employee at Microsoft.",
    type: "event"
  },
  {
    date: "2021",
    content: "Finished my Bachelor's from IIT Kharagpur with a Major in Electronics and Electrical Communication Engineering and Minor in Computer Science.",
    type: "event"
  },
];

export const publications = [
  {
    title: "Optimizing Long-Term Player Tracking and Identification in NAO Robot Soccer by fusing Game-state and External Video",
    authors: "Giuliano Albanese*, Arka Mitra*, Jan-Nico Zaech*, Yupeng Zhao*, Ajad Chhatkuli, Luc Van Gool",
    venue: "International Conference on Robotics and Automation (ICRA), 2023",
    description: "We propose an approach for long term tracking of similar looking Nao Robots using quadratic optimization which combines the robot's internal states and video from non-calibrated camera.",
    image: "/images/ICRA_2023.jpg",
    link: "https://openaccess.thecvf.com/content/WACV2024/papers/Albanese_Optimizing_Long-Term_Robot_Tracking_With_Multi-Platform_Sensor_Fusion_WACV_2024_paper.pdf"
  },
  {
    title: "Multi-Domain Referee Dataset: Enabling Recognition of Referee Signals on Robotic Platforms",
    authors: "Arka Mitra*, Lukas Molnar, Jan-Nico Zaech, Yan Wu, Seonyeong Heo, Fischer Yu, Luc Van Gool",
    venue: "RoboLetics: Workshop on Robot Learning in Athletics@ CoRL, 2023",
    description: "We introduce a dataset consisting of both synthetic and real-world referee signals. Additionally we show the amount of data required to train an end-to-end model using real data if already trained on synthetic data.",
    image: "/images/Referee.png",
    link: "https://openreview.net/pdf?id=MGvRtjcnZA"
  },
  {
    title: "Causality Detection using Multiple Annotation Decisions",
    authors: "Quynh Anh Nguyen*, Arka Mitra*",
    venue: "Empirical Methods in Natural Language Processing (EMNLP), 2022",
    description: "We propose a loss which considers the decision from multiple different annotators for causality detection.",
    image: "/images/anh_arka_emnlp.png",
    link: "https://aclanthology.org/2022.case-1.11.pdf"
  },
  {
    title: "Multilingual Hate Speech and Offensive Content Detection using Modified Cross-entropy Loss",
    authors: "Arka Mitra*, Priyanshu Sankhala*",
    venue: "Forum for Information Retrieval, 2021",
    description: "We create a model for hate speech and offensive content detection in multiple languages.",
    image: "/images/fire_hasoc.png",
    link: "https://arxiv.org/pdf/2202.02635.pdf"
  },
  {
    title: "Quantum-Inspired Interpretable AI-Empowered Decision Support System for Detection of Early-Stage Rheumatoid Arthritis in Primary Care",
    authors: "Samira Abbasgholizadeh Rahimi, Mojtaba Kolahdoozi, Arka Mitra, Jose L. Salmeron, Amir Mohammad Navali, Alireza Sadeghpour, Seyed Amir Mir Mohammadi",
    venue: "Mathematics Journal, 2022",
    description: "We detect early-stage Rheumatoid Arthritis using meta-heuristic search, combining it with fuzzy logic to provide explainable feature importance.",
    image: "/images/Samira_paper.png",
    link: "https://www.mdpi.com/2227-7390/10/3/496/pdf"
  },
  {
    title: "Automated COVID-19 Detection from CT Images Using Deep Learning",
    authors: "Abdulhamit Subasi, Arka Mitra, Fatih Ozyurt, Turker Tuncer",
    venue: "Book Chapter in Computer-aided Design and Diagnosis Methods for Biomedical Applications, 2021",
    description: "We show a comparison of classical and deep learning based methods for detecting COVID-19 from CT images.",
    image: "/images/automated_covid.png",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003121152-7/automated-covid-19-detection-ct-images-using-deep-learning-abdulhamit-subasi-arka-mitra-fatih-ozyurt-turker-tuncer"
  },
  {
    title: "Drone vs. Bird Detection: Deep Learning Algorithms and Results from a Grand Challenge",
    authors: "Angelo Coluccia, Alessio Fascista, Arne Schumann, Lars Sommer, Anastasios Dimou, Dimitrios Zarpalas, Miguel Méndez, David de la Iglesia, Iago González, Jean-Philippe Mercier, Guillaume Gagné, Arka Mitra, Shobha Rajashekar",
    venue: "Sensors Journal, 2021",
    description: "We evaluated different deep learning models and techniques for tracking drones in videos. It was done as a part of my internship at Honeywell.",
    image: "/images/drone.png",
    link: "https://www.mdpi.com/1424-8220/21/8/2824/htm"
  },
  {
    title: "Determination of stable structure of a cluster using convolutional neural network and particle swarm optimization",
    authors: "Arka Mitra, Gourhari Jana, Ranita Pal, Pratiksha Gaikwad, Shamil Sural, Pratim Kumar Chattaraj",
    venue: "Theoretical Chemistry Accounts, 2021",
    description: "We combine machine learning methods with meta-heuristic optimization to speed up the convergence of stable cluster structures.",
    image: "/images/chemistry_cnn.png",
    link: "https://link.springer.com/article/10.1007/s00214-021-02726-z"
  },
  {
    title: "IIT kgp at FinCausal 2020, Shared Task 1: Causality Detection using Sentence Embeddings in Financial Reports",
    authors: "Arka Mitra*, Harshvardhan Srivastava*, Yugam Tiwari*",
    venue: "COLING: International Conference on Computational Linguistics, 2020",
    description: "We demonstrate that embeddings from large language models can be used to detect causality in a sentence. Additionally, we show that models trained on next sentence prediction are better in predicting causality.",
    image: "/images/iit_kgp.png",
    link: "https://aclanthology.org/2020.fnp-1.16/"
  },
  {
    title: "A Systematic Search over Deep Convolutional Neural Network Architectures for Screening Chest Radiographs",
    authors: "Arka Mitra*, Arunava Chakravarty*, Nirmalya Ghosh, Tandra Sarkar, Ramanathan Sethuraman, Debdoot Sheet",
    venue: "EMBC: IEEE Engineering in Medicine and Biology Conference, 2020",
    description: "We explain the predictions of deep learning models on chest x-rays. The results were validated by a radiologist.",
    image: "/images/xray.png",
    link: "https://ieeexplore.ieee.org/document/9175246"
  },
  {
    title: "Integrating firefly algorithm with density functional theory for global optimization of Al42− clusters",
    authors: "Arka Mitra, Gourhari Jana, Prachi Agarwal, Shamil Sural, Pratim Kumar Chattaraj",
    venue: "Theoretical Chemistry Accounts, 2019",
    description: "We incorporate domain knowledge into meta-heuristic algorithms to improve the convergence of the algorithms.",
    image: "/images/Chemistry_flat.png",
    link: "https://link.springer.com/article/10.1007/s00214-020-2550-y"
  },
  {
    title: "Modified Particle Swarm Optimization Algorithm for Global Optimization of Carbon Clusters",
    authors: "Gourhari Jana, Arka Mitra, Sudip Pan, Shamik Sural, Pratim Kumar Chattaraj",
    venue: "Frontiers In Chemistry, 2019",
    description: "We find the most stable structures of carbon clusters using a meta-heuristic algorithm in combination with Gaussian07 software.",
    image: "/images/Chem_carbon.png",
    link: "https://www.frontiersin.org/articles/10.3389/fchem.2019.00485/full"
  }
];

export const projects = [
  {
    title: "Untangling ML",
    description: "I keep track of some of the machine learning papers and provide insights on latest research developments.",
    image: "/images/business-office-desk-work-mac-computer-technology-paper-notebook-thumbnail.jpg",
    link: "https://sites.google.com/view/untanglingml/home",
    tags: ["Machine Learning", "Blog", "Research"]
  },
  {
    title: "Robot Soccer Computer Vision",
    description: "Leading computer vision efforts for NomadZ robosoccer team at ETH Zurich, teaching robots to play soccer autonomously.",
    image: "/images/arka_mitra.jpg", // Placeholder or use specialized image if available
    tags: ["Computer Vision", "Robotics", "Deep Learning"]
  }
];

export const skills = {
  Programming: ["Python", "C++", "TypeScript"],
  Libraries: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "spaCy"],
  DevOps: ["Git", "Docker", "CI/CD", "Linux", "GitHub Actions", "DVC"],
  "Machine Learning": ["LLMs", "Computer Vision", "NLP", "Meta-heuristic Optimization", "Explainable AI"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
};

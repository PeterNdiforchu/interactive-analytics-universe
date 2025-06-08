import { ProjectCardProps } from '@/components/ProjectCard';

// Mock data for projects
export const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: "Excel Sales Analysis",
    description: "This project showcases proficiency in using Microsoft Excel for comprehensive sales data analysis. It covers the process from data cleaning and preparation to deriving insights using Pivot Tables and creating visualizations directly within Excel.",
    image: "/lovable-uploads/excel_sales_analysis_dash1.png",
    tags: ["Excel", "Data Cleaning", "Pivot Tables", "Data Visualization", "Excel Functions"],
    githubUrl: "https://github.com/shanderson10/Excel-Sales-Analysis"
  },
  {
    id: 2,
    title: "Capturing & Analyzing Live Stock Data",
    description: "This project explores methods for capturing live stock market data and applying statistical techniques to analyze it. The focus is on understanding stock behavior through descriptive statistics and potentially informing trading decisions using prescriptive insights.",
    image: "/lovable-uploads/stock_analysis_dashboard.png",
    tags: ["Descriptive Statistics", "Prescriptive Statistics", "Data Interpretation", "Python", "Pandas", "NumPy", "SciPy"],
    githubUrl: "https://github.com/shanderson10/Capturing-Live-Stock-Data"
  },
  {
    id: 3,
    title: "Customer Statistics & Superstore Sales Analysis",
    description: "This project delves into customer behavior and sales performance within a superstore dataset. The analysis focuses on identifying key customer segments, understanding purchasing patterns, and visualizing sales trends using Tableau.",
    image: "/lovable-uploads/superstore_sales_analysis_dashboard.png",
    tags: ["Tableau", "Exploratory Data Analysis (EDA)", "Data Visualization", "Customer Segmentation", "Sales Analysis"],
    githubUrl: "https://github.com/shanderson10/Customer-Statistics-Superstore-Sales"
  },
  {
    id: 4,
    title: "Descriptive Statistics for Nutrient Analysis",
    description: "This project explores the nutritional composition of 10 items using descriptive statistics to gain meaningful insights. The analysis covers distribution, central tendencies, dispersion, and various visualizations.",
    image: "/lovable-uploads/Nutrition_analysis_histogram.png",
    tags: ["Python", "Jupyter Notebook", "Descriptive Statistics", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/shanderson10/Descriptive-Statistics"
  },
  {
    id: 5,
    title: "City Rankings and Health Metrics Analysis",
    description: "This project explores the relationship between city rankings, happiness levels, and health metrics such as obesity and life expectancy. It aims to uncover patterns and insights that can guide urban planning and public health initiatives.",
    image: "/lovable-uploads/Health_Analytics_correlation_matrix.png",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Colab", "Data Analysis", "Data Visualization", "Statistical Analysis"],
    githubUrl: "https://github.com/shanderson10/City-Rankings-and-Health-Metrics"
  }
];

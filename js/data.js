// ============================================================
//  AI ROADMAP DATA — All videos, playlists, phases
//  Total: 418 playlist videos + 11 standalone videos
// ============================================================

const ROADMAP_DATA = {
  phases: [
    {
      id: 1,
      title: "Phase 1 — Basics",
      timeline: "Week 0–2",
      color: "#6366f1",
      sections: [
        {
          id: "s01", title: "Linear Algebra for ML",
          icon: "fas fa-cube", phase: 1,
          videos: [
            { id:"v_e9h-ZZ_ahRg", title:"Session on Linear Algebra for Machine Learning", videoId:"e9h-ZZ_ahRg", num:1 },
            { id:"v_10e-b8AgdVA", title:"Equation of a Hyper-plane in N dimensions", videoId:"10e-b8AgdVA", num:2 },
            { id:"v_fNk_zzaMoSs", title:"Vectors | Chapter 1, Essence of linear algebra", videoId:"fNk_zzaMoSs", num:3 },
            { id:"v_k7RM-ot2NWY", title:"Linear combinations, span, and basis vectors | Chapter 2", videoId:"k7RM-ot2NWY", num:4 },
            { id:"v_kYB8IZa5AuE", title:"Linear transformations and matrices | Chapter 3", videoId:"kYB8IZa5AuE", num:5 },
            { id:"v_XkY2DOUCWMU", title:"Matrix multiplication as composition | Chapter 4", videoId:"XkY2DOUCWMU", num:6 },
            { id:"v_LyGKycYT2v0", title:"Dot products and duality | Chapter 9", videoId:"LyGKycYT2v0", num:7 },
            { id:"v_PFDu9oVAE-g", title:"Eigenvectors and eigenvalues | Chapter 14", videoId:"PFDu9oVAE-g", num:8 }
          ]
        },
        {
          id: "s02", title: "Statistics (Mean, Variance & More)",
          icon: "fas fa-chart-line", phase: 1,
          videos: [
            { id:"v_tPhzDKjQBpo", title:"Descriptive Statistics Vs Inferential Statistics", videoId:"tPhzDKjQBpo", num:1 },
            { id:"v_kiyf_5dieTE", title:"Types of Data in Statistics", videoId:"kiyf_5dieTE", num:2 },
            { id:"v_JU2wfk9IibA", title:"Studying types of data with graphs", videoId:"JU2wfk9IibA", num:3 },
            { id:"v_pu8C9wA4ljI", title:"Descriptive Statistics - Visualization Techniques", videoId:"pu8C9wA4ljI", num:4 },
            { id:"v_RwFK-BfY9ZY", title:"Descriptive Statistics - Measures of Central Tendency", videoId:"RwFK-BfY9ZY", num:5 },
            { id:"v_iifEWPR8BY8", title:"Descriptive Statistics - Measures of Spread", videoId:"iifEWPR8BY8", num:6 },
            { id:"v__q5QTvMXPZ4", title:"Probability Density Function", videoId:"_q5QTvMXPZ4", num:7 },
            { id:"v_yvm1gaQXhSo", title:"Cumulative Distribution Function", videoId:"yvm1gaQXhSo", num:8 },
            { id:"v_GKuJpYOqnpk", title:"How to calculate PDF and CDF", videoId:"GKuJpYOqnpk", num:9 },
            { id:"v_rC3SHFO9iz0", title:"How to use CDF in our analysis", videoId:"rC3SHFO9iz0", num:10 },
            { id:"v_ZCvndeHQFvQ", title:"Normal Distribution", videoId:"ZCvndeHQFvQ", num:11 },
            { id:"v_UELedSeRCjo", title:"Z-score and Z-tables", videoId:"UELedSeRCjo", num:12 },
            { id:"v_pwqHvjAymoY", title:"Central Limit Theorem - Proof", videoId:"pwqHvjAymoY", num:13 }
          ]
        },
        {
          id: "s03", title: "Probability Basics",
          icon: "fas fa-dice", phase: 1,
          videos: [
            { id:"v_Ty7knppVo9E", title:"Naive Bayes Classifier | Part 1 | Conditional Probability", videoId:"Ty7knppVo9E", num:1 },
            { id:"v_0GD480CnrO4", title:"Naive Bayes Classifier | Part 2 | Independent Events in Probability", videoId:"0GD480CnrO4", num:2 },
            { id:"v_nneTjTYikBE", title:"Naive Bayes Classifier | Part 3 | Mutually Exclusive Events", videoId:"nneTjTYikBE", num:3 },
            { id:"v_Oqw-v-Z7PuU", title:"Naive Bayes Classifier | Part 4 | Bayes Theorem in Probability", videoId:"Oqw-v-Z7PuU", num:4 },
            { id:"v_aAEHjXDHtbE", title:"Naive Bayes Classifier | Part 5 | Problem based upon Bayes Theorem", videoId:"aAEHjXDHtbE", num:5 },
            { id:"v_CfZa1daLjwo", title:"Introduction to Probability Distributions", videoId:"CfZa1daLjwo", num:6 },
            { id:"v_3C9mpj-NYgo", title:"Introduction to Discrete Uniform Distribution", videoId:"3C9mpj-NYgo", num:7 },
            { id:"v__FbZI9mtSSM", title:"Probability: Binomial Distribution", videoId:"_FbZI9mtSSM", num:8 },
            { id:"v_nl9WiZMZnYs", title:"Bernoulli Distribution", videoId:"nl9WiZMZnYs", num:9 },
            { id:"v_BbLfV0wOeyc", title:"Data Science & Statistics Tutorial: The Poisson Distribution", videoId:"BbLfV0wOeyc", num:10 }
          ]
        },
        {
          id: "s_jupyter", title: "Jupyter Notebook + Google Colab",
          icon: "fas fa-book", phase: 1,
          videos: [
            { id:"v_5pf0_bpNbkw", title:"Jupyter Notebook Complete Guide", videoId:"5pf0_bpNbkw", num:1 }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2 — Data Handling",
      timeline: "Week 2–4",
      color: "#10b981",
      sections: [
        {
          id: "s04", title: "NumPy",
          icon: "fas fa-table", phase: 2,
          videos: [
            { id:"v_CpPLLp3snK4", title:"Numpy Part 1 - Introduction to Numpy", videoId:"CpPLLp3snK4", num:1 },
            { id:"v_r7SmXZEtB0I", title:"Numpy Part 2 - Installing Jupyter Notebook", videoId:"r7SmXZEtB0I", num:2 },
            { id:"v_9TKpRnoEb5s", title:"Numpy Part 3 - Creating N-d Arrays", videoId:"9TKpRnoEb5s", num:3 },
            { id:"v_ikx70DFC2T8", title:"Numpy Part 4 - Some Important Attributes", videoId:"ikx70DFC2T8", num:4 },
            { id:"v_f7mcmDm7QFs", title:"Numpy Part 5 - Python Lists Vs Numpy Arrays", videoId:"f7mcmDm7QFs", num:5 },
            { id:"v_WUcwaevTlAk", title:"Numpy Part 6 - Indexing, Slicing and Iteration", videoId:"WUcwaevTlAk", num:6 },
            { id:"v_7VVZIkCcTHU", title:"Numpy Part 7 - Numpy Operations", videoId:"7VVZIkCcTHU", num:7 },
            { id:"v__1iVPLntjLQ", title:"Numpy Part 8 - Reshaping Numpy arrays", videoId:"_1iVPLntjLQ", num:8 },
            { id:"v_ilqFp9KHW98", title:"Numpy Part 9 - Fancy indexing in Numpy", videoId:"ilqFp9KHW98", num:9 },
            { id:"v_xqF-xqTDbQk", title:"Numpy Part 10 - Indexing with Boolean Arrays", videoId:"xqF-xqTDbQk", num:10 },
            { id:"v_cm1wja3OLc4", title:"Numpy Part 11 - Plotting graphs using Numpy", videoId:"cm1wja3OLc4", num:11 },
            { id:"v_LaKAA7Z84so", title:"Numpy Part 12 - Broadcasting", videoId:"LaKAA7Z84so", num:12 },
            { id:"v_-h8iXf1Lw6c", title:"Some important numpy functions", videoId:"-h8iXf1Lw6c", num:13 }
          ]
        },
        {
          id: "s05", title: "Pandas",
          icon: "fas fa-database", phase: 2,
          videos: [
            { id:"v_kq9Vmg5d7Sk", title:"Pandas Part 1 - Introduction to Pandas", videoId:"kq9Vmg5d7Sk", num:1 },
            { id:"v_8ZUfMoVTQWk", title:"Pandas Part 2 - Importing data using read_csv()", videoId:"8ZUfMoVTQWk", num:2 },
            { id:"v_VZppgndl37A", title:"Pandas Part 3 - Important functions and attributes", videoId:"VZppgndl37A", num:3 },
            { id:"v_gGaZCSvuMGA", title:"Pandas Part 4 - Fetching rows and columns using iloc", videoId:"gGaZCSvuMGA", num:4 },
            { id:"v_jldb3d-_WIw", title:"Pandas Part 5 - Filtering dataframe on a condition", videoId:"jldb3d-_WIw", num:5 },
            { id:"v_-FLYZFOV_Nw", title:"Pandas Part 6 - The value_counts() function", videoId:"-FLYZFOV_Nw", num:6 },
            { id:"v_gRjVsiK4OHQ", title:"Pandas Part 7 - The Plot function", videoId:"gRjVsiK4OHQ", num:7 },
            { id:"v_KoB-nvqywLM", title:"Pandas Part 8 - Series Operations", videoId:"KoB-nvqywLM", num:8 },
            { id:"v_KbkJ7mhKgC4", title:"Pandas Part 9 - The sort_values() method", videoId:"KbkJ7mhKgC4", num:9 },
            { id:"v_YfOsU9xqCqY", title:"Pandas Part 10 - The drop_duplicates() method", videoId:"YfOsU9xqCqY", num:10 },
            { id:"v_OoKUc6VD5dU", title:"Pandas Part 11 - The Groupby() function", videoId:"OoKUc6VD5dU", num:11 },
            { id:"v_exelwvB46DU", title:"Pandas Part 12 - Groupby on IPL Dataset", videoId:"exelwvB46DU", num:12 },
            { id:"v_CliTLOc1glM", title:"Pandas Part 13 - The isin() function", videoId:"CliTLOc1glM", num:13 },
            { id:"v_8d25tYXU2hY", title:"Pandas Part 14 - The merge function", videoId:"8d25tYXU2hY", num:14 },
            { id:"v_BUSdBkO7qkA", title:"Pandas Part 15 - Pandas Pivot Table", videoId:"BUSdBkO7qkA", num:15 },
            { id:"v_KVp-XhyQAWE", title:"Pandas Part 16 - Applying Pivot Table to IPL Dataset", videoId:"KVp-XhyQAWE", num:16 },
            { id:"v_lIaL9yS9osM", title:"Pandas Part 17 - The corr function", videoId:"lIaL9yS9osM", num:17 },
            { id:"v_9r3jtLK6Xg0", title:"Pandas Part 18 - The rename function", videoId:"9r3jtLK6Xg0", num:18 },
            { id:"v_kJAHvll2itg", title:"Pandas Part 19 - The set_index() and reset_index()", videoId:"kJAHvll2itg", num:19 },
            { id:"v_CZJT4_B73x0", title:"Pandas Part 20 - The dropna() method", videoId:"CZJT4_B73x0", num:20 },
            { id:"v_T-x9IYMr1jM", title:"Pandas Part 21 - The fillna() method", videoId:"T-x9IYMr1jM", num:21 }
          ]
        },
        {
          id: "s06", title: "Matplotlib",
          icon: "fas fa-chart-area", phase: 2,
          videos: [
            { id:"v_xXibS9832FM", title:"Matplotlib Complete Tutorial", videoId:"xXibS9832FM", num:1 }
          ]
        },
        {
          id: "s06b", title: "Seaborn",
          icon: "fas fa-chart-pie", phase: 2,
          videos: [
            { id:"v_K_8u_AJ75RI", title:"Data Visualization using Seaborn | Scatter Plots", videoId:"K_8u_AJ75RI", num:1 },
            { id:"v_90i5cfSwUc0", title:"Data Visualization using Seaborn | Categorical Scatterplots", videoId:"90i5cfSwUc0", num:2 },
            { id:"v_ropoXtbhUhg", title:"Data Visualization using Seaborn | Boxplot", videoId:"ropoXtbhUhg", num:3 },
            { id:"v_nqHKPskPPyk", title:"Data Visualization using Seaborn | Violinplots", videoId:"nqHKPskPPyk", num:4 },
            { id:"v_syogI8VQ8v0", title:"Data Visualization using Seaborn | Barplots and Countplots", videoId:"syogI8VQ8v0", num:5 },
            { id:"v_eAGjpFBJUCw", title:"Data Visualization using Seaborn | Heatmaps", videoId:"eAGjpFBJUCw", num:6 },
            { id:"v_NChlGQGViSQ", title:"Data Visualization using Seaborn | Clustermaps", videoId:"NChlGQGViSQ", num:7 },
            { id:"v_yV4pSrX_2h4", title:"Data Visualization using Seaborn | Jointplots", videoId:"yV4pSrX_2h4", num:8 },
            { id:"v_I01YLvoUxUQ", title:"Data Visualization using Seaborn | Pairplots", videoId:"I01YLvoUxUQ", num:9 },
            { id:"v_99gCewBIbDc", title:"Data Visualization using Seaborn | Distplots", videoId:"99gCewBIbDc", num:10 }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3 — Core Machine Learning",
      timeline: "Month 1–2",
      color: "#f59e0b",
      sections: [
        {
          id: "s07", title: "100 Days of ML — CampusX",
          icon: "fas fa-robot", phase: 3,
          videos: [
            { id:"v_ZftI2fEz0Fw", title:"What is Machine Learning? | 100 Days of Machine Learning", videoId:"ZftI2fEz0Fw", num:1 },
            { id:"v_1v3_AQ26jZ0", title:"AI Vs ML Vs DL for Beginners", videoId:"1v3_AQ26jZ0", num:2 },
            { id:"v_81ymPYEtFOw", title:"Types of Machine Learning for Beginners", videoId:"81ymPYEtFOw", num:3 },
            { id:"v_nPrhFxEuTYU", title:"Batch Machine Learning | Offline Vs Online Learning", videoId:"nPrhFxEuTYU", num:4 },
            { id:"v_3oOipgCbLIk", title:"Online Machine Learning", videoId:"3oOipgCbLIk", num:5 },
            { id:"v_ntAOq1ioTKo", title:"Instance-Based Vs Model-Based Learning", videoId:"ntAOq1ioTKo", num:6 },
            { id:"v_WGUNAJki2S4", title:"Challenges in Machine Learning", videoId:"WGUNAJki2S4", num:7 },
            { id:"v_UZio8TcTMrI", title:"Application of Machine Learning", videoId:"UZio8TcTMrI", num:8 },
            { id:"v_iDbhQGz_rEo", title:"Machine Learning Development Life Cycle | MLDLC", videoId:"iDbhQGz_rEo", num:9 },
            { id:"v_93rKZs0MkgU", title:"Data Engineer Vs Data Analyst Vs Data Scientist Vs ML Engineer", videoId:"93rKZs0MkgU", num:10 },
            { id:"v_vVhD2EyS41Y", title:"What are Tensors | Tensor In-depth Explanation", videoId:"vVhD2EyS41Y", num:11 },
            { id:"v_82P5N2m41jE", title:"Installing Anaconda For Data Science | Jupyter Notebook | Google Colab", videoId:"82P5N2m41jE", num:12 },
            { id:"v_dr7z7a_8lQw", title:"End to End Toy Project | Day 13", videoId:"dr7z7a_8lQw", num:13 },
            { id:"v_A9SezQlvakw", title:"How to Frame a Machine Learning Problem", videoId:"A9SezQlvakw", num:14 },
            { id:"v_a_XrmKlaGTs", title:"Working with CSV files | Day 15", videoId:"a_XrmKlaGTs", num:15 },
            { id:"v_fFwRC-fapIU", title:"Working with JSON/SQL | Day 16", videoId:"fFwRC-fapIU", num:16 },
            { id:"v_roTZJaxjnJc", title:"Fetching Data From an API | Day 17", videoId:"roTZJaxjnJc", num:17 },
            { id:"v_8NOdgjC1988", title:"Fetching data using Web Scraping | Day 18", videoId:"8NOdgjC1988", num:18 },
            { id:"v_mJlRTUuVr04", title:"Understanding Your Data | Day 19", videoId:"mJlRTUuVr04", num:19 },
            { id:"v_4HyTlbHUKSw", title:"EDA using Univariate Analysis | Day 20", videoId:"4HyTlbHUKSw", num:20 },
            { id:"v_6D3VtEfCw7w", title:"EDA using Bivariate and Multivariate Analysis | Day 21", videoId:"6D3VtEfCw7w", num:21 },
            { id:"v_E69Lg2ZgOxg", title:"Pandas Profiling | Day 22", videoId:"E69Lg2ZgOxg", num:22 },
            { id:"v_sluoVhT0ehg", title:"What is Feature Engineering | Day 23", videoId:"sluoVhT0ehg", num:23 },
            { id:"v_1Yw9sC0PNwY", title:"Feature Scaling - Standardization | Day 24", videoId:"1Yw9sC0PNwY", num:24 },
            { id:"v_eBrGyuA2MIg", title:"Feature Scaling - Normalization | MinMaxScaling | MaxAbsScaling | RobustScaling", videoId:"eBrGyuA2MIg", num:25 },
            { id:"v_w2GglmYHfmM", title:"Encoding Categorical Data | Ordinal Encoding | Label Encoding", videoId:"w2GglmYHfmM", num:26 },
            { id:"v_U5oCv3JKWKA", title:"One Hot Encoding | Handling Categorical Data | Day 27", videoId:"U5oCv3JKWKA", num:27 },
            { id:"v_5TVj6iEBR4I", title:"Column Transformer in Machine Learning | ColumnTransformer in Sklearn", videoId:"5TVj6iEBR4I", num:28 },
            { id:"v_xOccYkgRV4Q", title:"Machine Learning Pipelines A-Z | Day 29", videoId:"xOccYkgRV4Q", num:29 },
            { id:"v_cTjj3LE8E90", title:"Function Transformer | Log Transform | Reciprocal Transform", videoId:"cTjj3LE8E90", num:30 },
            { id:"v_lV_Z4HbNAx0", title:"Power Transformer | Box-Cox Transform | Yeo-Johnson Transform", videoId:"lV_Z4HbNAx0", num:31 },
            { id:"v_kKWsJGKcMvo", title:"Binning and Binarization | Discretization | Quantile Binning | KMeans Binning", videoId:"kKWsJGKcMvo", num:32 },
            { id:"v_9xiX-I5_LQY", title:"Handling Mixed Variables | Feature Engineering", videoId:"9xiX-I5_LQY", num:33 },
            { id:"v_J73mvgG9fFs", title:"Handling Date and Time Variables | Day 34", videoId:"J73mvgG9fFs", num:34 },
            { id:"v_aUnNWZorGmk", title:"Handling Missing Data | Part 1 | Complete Case Analysis", videoId:"aUnNWZorGmk", num:35 },
            { id:"v_mCL2xLBDw8M", title:"Handling missing data | Numerical Data | Simple Imputer", videoId:"mCL2xLBDw8M", num:36 },
            { id:"v_l_Wip8bEDFQ", title:"Handling Missing Categorical Data | Simple Imputer", videoId:"l_Wip8bEDFQ", num:37 },
            { id:"v_Ratcir3p03w", title:"Missing Indicator | Random Sample Imputation | Handling Missing Data Part 4", videoId:"Ratcir3p03w", num:38 },
            { id:"v_-fK-xEev2I8", title:"KNN Imputer | Multivariate Imputation | Handling Missing Data Part 5", videoId:"-fK-xEev2I8", num:39 },
            { id:"v_a38ehxv3kyk", title:"Multivariate Imputation by Chained Equations | MICE Algorithm | Iterative Imputer", videoId:"a38ehxv3kyk", num:40 },
            { id:"v_Lln1PKgGr_M", title:"What are Outliers | Outliers in Machine Learning", videoId:"Lln1PKgGr_M", num:41 },
            { id:"v_OnPE-Z8jtqM", title:"Outlier Detection and Removal using Z-score Method", videoId:"OnPE-Z8jtqM", num:42 },
            { id:"v_Ccv1-W5ilak", title:"Outlier Detection and Removal using the IQR Method", videoId:"Ccv1-W5ilak", num:43 },
            { id:"v_bcXA4CqRXvM", title:"Outlier Detection using the Percentile Method | Winsorization Technique", videoId:"bcXA4CqRXvM", num:44 },
            { id:"v_ma-h30PoFms", title:"Feature Construction | Feature Splitting", videoId:"ma-h30PoFms", num:45 },
            { id:"v_ToGuhynu-No", title:"Curse of Dimensionality", videoId:"ToGuhynu-No", num:46 },
            { id:"v_iRbsBi5W0-c", title:"Principle Component Analysis (PCA) | Part 1 | Geometric Intuition", videoId:"iRbsBi5W0-c", num:47 },
            { id:"v_tXXnxjj2wM4", title:"Principle Component Analysis (PCA) | Part 2 | Problem Formulation", videoId:"tXXnxjj2wM4", num:48 },
            { id:"v_tofVCUDrg4M", title:"Principle Component Analysis (PCA) | Part 3 | Code Example", videoId:"tofVCUDrg4M", num:49 },
            { id:"v_UZPfbG0jNec", title:"Simple Linear Regression | Code + Intuition", videoId:"UZPfbG0jNec", num:50 },
            { id:"v_dXHIDLPKdmA", title:"Simple Linear Regression | Mathematical Formulation | Coding from Scratch", videoId:"dXHIDLPKdmA", num:51 },
            { id:"v_Ti7c-Hz7GSM", title:"Regression Metrics | MSE, MAE & RMSE | R2 Score & Adjusted R2 Score", videoId:"Ti7c-Hz7GSM", num:52 },
            { id:"v_ashGekqstl8", title:"Multiple Linear Regression | Geometric Intuition & Code", videoId:"ashGekqstl8", num:53 },
            { id:"v_NU37mF5q8VE", title:"Multiple Linear Regression | Part 2 | Mathematical Formulation", videoId:"NU37mF5q8VE", num:54 },
            { id:"v_VmZWXzxmNrE", title:"Multiple Linear Regression | Part 3 | Code From Scratch", videoId:"VmZWXzxmNrE", num:55 },
            { id:"v_EmSNAtcHLm8", title:"What are the main Assumptions of Linear Regression?", videoId:"EmSNAtcHLm8", num:56 },
            { id:"v_ORyfPJypKuU", title:"Gradient Descent From Scratch | End to End Gradient Descent", videoId:"ORyfPJypKuU", num:57 },
            { id:"v_Jyo53pAyVAM", title:"Batch Gradient Descent with Code Demo", videoId:"Jyo53pAyVAM", num:58 },
            { id:"v_V7KBAa_gh4c", title:"Stochastic Gradient Descent", videoId:"V7KBAa_gh4c", num:59 },
            { id:"v__scscQ4HVTY", title:"Mini-Batch Gradient Descent", videoId:"_scscQ4HVTY", num:60 },
            { id:"v_BNWLf3cKdbQ", title:"Polynomial Regression | Machine Learning", videoId:"BNWLf3cKdbQ", num:61 },
            { id:"v_74DU02Fyrhk", title:"Bias Variance Trade-off | Overfitting and Underfitting", videoId:"74DU02Fyrhk", num:62 },
            { id:"v_aEow1QoTLo0", title:"Ridge Regression Part 1 | Geometric Intuition and Code", videoId:"aEow1QoTLo0", num:63 },
            { id:"v_oDlZBQjk_3A", title:"Ridge Regression Part 2 | Mathematical Formulation & Code", videoId:"oDlZBQjk_3A", num:64 },
            { id:"v_Fci_wwMp8G8", title:"Ridge Regression Part 3 | Gradient Descent", videoId:"Fci_wwMp8G8", num:65 },
            { id:"v_8osKeShYVRQ", title:"5 Key Points - Ridge Regression | Part 4", videoId:"8osKeShYVRQ", num:66 },
            { id:"v_HLF4bFbBgwk", title:"Lasso Regression | Intuition and Code Sample", videoId:"HLF4bFbBgwk", num:67 },
            { id:"v_FN4aZPIAfI4", title:"Why Lasso Regression creates sparsity?", videoId:"FN4aZPIAfI4", num:68 },
            { id:"v_2g2DBkFhTTY", title:"ElasticNet Regression | Intuition and Code Example", videoId:"2g2DBkFhTTY", num:69 },
            { id:"v_XNXzVfItWGY", title:"Logistic Regression Part 1 | Perceptron Trick", videoId:"XNXzVfItWGY", num:70 },
            { id:"v_tLezwPKvPK4", title:"Logistic Regression Part 2 | Perceptron Trick Code", videoId:"tLezwPKvPK4", num:71 },
            { id:"v_ehO0-6i9qD4", title:"Logistic Regression Part 3 | Sigmoid Function", videoId:"ehO0-6i9qD4", num:72 },
            { id:"v_6bXOo0sxY5c", title:"Logistic Regression Part 4 | Loss Function | Maximum Likelihood", videoId:"6bXOo0sxY5c", num:73 },
            { id:"v_awjXaFR1jOM", title:"Derivative of Sigmoid Function", videoId:"awjXaFR1jOM", num:74 },
            { id:"v_ABrrSwMYWSg", title:"Logistic Regression Part 5 | Gradient Descent & Code From Scratch", videoId:"ABrrSwMYWSg", num:75 },
            { id:"v_c09drtuCS3c", title:"Accuracy and Confusion Matrix | Type 1 and Type 2 Errors", videoId:"c09drtuCS3c", num:76 },
            { id:"v_iK-kdhJ-7yI", title:"Precision, Recall and F1 Score | Classification Metrics Part 2", videoId:"iK-kdhJ-7yI", num:77 },
            { id:"v_gdW6hj9IXaA", title:"ROC Curve in Machine Learning | ROC-AUC", videoId:"gdW6hj9IXaA", num:78 },
            { id:"v_Z8noL_0M4tw", title:"Softmax Regression || Multinomial Logistic Regression", videoId:"Z8noL_0M4tw", num:79 },
            { id:"v_WnBYW_DX3sM", title:"Polynomial Features in Logistic Regression | Non Linear Logistic Regression", videoId:"WnBYW_DX3sM", num:80 },
            { id:"v_ay_OcblJasE", title:"Logistic Regression Hyperparameters || Logistic Regression Part 8", videoId:"ay_OcblJasE", num:81 },
            { id:"v_Ty7knppVo9E_ml", title:"Naive Bayes Classifier | Part 1 | Conditional Probability [ML Series]", videoId:"Ty7knppVo9E", num:82 },
            { id:"v_0GD480CnrO4_ml", title:"Naive Bayes Classifier | Part 2 | Independent Events [ML Series]", videoId:"0GD480CnrO4", num:83 },
            { id:"v_nneTjTYikBE_ml", title:"Naive Bayes Classifier | Part 3 | Mutually Exclusive Events [ML Series]", videoId:"nneTjTYikBE", num:84 },
            { id:"v_Oqw-v-Z7PuU_ml", title:"Naive Bayes Classifier | Part 4 | Bayes Theorem [ML Series]", videoId:"Oqw-v-Z7PuU", num:85 },
            { id:"v_aAEHjXDHtbE_ml", title:"Naive Bayes Classifier | Part 5 | Problem based upon Bayes Theorem [ML Series]", videoId:"aAEHjXDHtbE", num:86 },
            { id:"v_ZR1_QtLk_4U", title:"Naive Bayes Classifier | Part 6 | Intuition", videoId:"ZR1_QtLk_4U", num:87 },
            { id:"v_2PVRG45eVrY", title:"Naive Bayes Classifier | Part 7 | Mathematics behind Naive Bayes", videoId:"2PVRG45eVrY", num:88 },
            { id:"v_DeeWsqoY4Eo", title:"Naive Bayes Classifier | Part 8 | Simple Example Code", videoId:"DeeWsqoY4Eo", num:89 },
            { id:"v_TCgK2nBJx9o", title:"Naive Bayes Part 9 | Handling Numerical Data", videoId:"TCgK2nBJx9o", num:90 },
            { id:"v_abnL_GUGub4", title:"What is K Nearest Neighbors? | KNN Explained", videoId:"abnL_GUGub4", num:91 },
            { id:"v_ugTxMLjLS8M", title:"Support Vector Machines | Geometric Intuition", videoId:"ugTxMLjLS8M", num:92 },
            { id:"v_yCAlHPDgWtM", title:"Mathematics of SVM | Hard margin SVM", videoId:"yCAlHPDgWtM", num:93 },
            { id:"v_utqrvIFAE1k", title:"Mathematics of Support Vector Machine | Soft Margin SVM", videoId:"utqrvIFAE1k", num:94 },
            { id:"v_egxjT0p7_K8", title:"Kernel Trick in SVM | Geometric Intuition", videoId:"egxjT0p7_K8", num:95 },
            { id:"v_pjvmVMDrzVU", title:"Kernel Trick in SVM | Code Example", videoId:"pjvmVMDrzVU", num:96 },
            { id:"v_IZnno-dKgVQ", title:"Decision Trees Geometric Intuition | Entropy | Gini impurity", videoId:"IZnno-dKgVQ", num:97 },
            { id:"v_mDEV0Iucwz0", title:"Decision Trees - Hyperparameters | Overfitting and Underfitting", videoId:"mDEV0Iucwz0", num:98 },
            { id:"v_RANHxyAvtM4", title:"Regression Trees | Decision Trees Part 3", videoId:"RANHxyAvtM4", num:99 },
            { id:"v_SlMZqfvl5uw", title:"Awesome Decision Tree Visualization using dtreeviz library", videoId:"SlMZqfvl5uw", num:100 },
            { id:"v_bHK1fE_BUms", title:"Introduction to Ensemble Learning", videoId:"bHK1fE_BUms", num:101 },
            { id:"v__W1i-c_6rOk", title:"Voting Ensemble | Introduction and Core Idea | Part 1", videoId:"_W1i-c_6rOk", num:102 },
            { id:"v_pGQnNYdPTvY", title:"Voting Ensemble | Voting Classifier | Hard Voting Vs Soft Voting | Part 2", videoId:"pGQnNYdPTvY", num:103 },
            { id:"v_ut4vh59rGkw", title:"Voting Ensemble | Regression | Part 3", videoId:"ut4vh59rGkw", num:104 },
            { id:"v_LUiBOAy7x6Y", title:"Bagging | Introduction | Part 1", videoId:"LUiBOAy7x6Y", num:105 },
            { id:"v_-1T54G_E-ys", title:"Bagging Ensemble | Part 2 | Bagging Classifiers", videoId:"-1T54G_E-ys", num:106 },
            { id:"v_HYVzrETXbkE", title:"Bagging Ensemble | Part 3 | Bagging Regressor", videoId:"HYVzrETXbkE", num:107 },
            { id:"v_F9uESCHGjhA", title:"Introduction to Random Forest | Intuition behind the Algorithm", videoId:"F9uESCHGjhA", num:108 },
            { id:"v_jHgG4gjuFAk", title:"How Random Forest Performs So Well? Bias Variance Trade-Off", videoId:"jHgG4gjuFAk", num:109 },
            { id:"v_l93jRojZMqU", title:"Bagging Vs Random Forest", videoId:"l93jRojZMqU", num:110 },
            { id:"v_WOFVY_wQ9wU", title:"Random Forest Hyper-parameters", videoId:"WOFVY_wQ9wU", num:111 },
            { id:"v_4Im0CT43QxY", title:"Hyperparameter Tuning Random Forest using GridSearchCV and RandomizedSearchCV", videoId:"4Im0CT43QxY", num:112 },
            { id:"v_tdDhyFoSG94", title:"OOB Score | Out of Bag Evaluation in Random Forest", videoId:"tdDhyFoSG94", num:113 },
            { id:"v_R47JAob1xBY", title:"Feature Importance using Random Forest and Decision Trees", videoId:"R47JAob1xBY", num:114 },
            { id:"v_sFKnP0iP0K0", title:"How Adaboost Classifier Works? | Geometric Intuition", videoId:"sFKnP0iP0K0", num:115 },
            { id:"v_RT0t9a3Xnfw", title:"AdaBoost - A Step by Step Explanation", videoId:"RT0t9a3Xnfw", num:116 },
            { id:"v_a20TaKNsriE", title:"AdaBoost Algorithm | Code from Scratch", videoId:"a20TaKNsriE", num:117 },
            { id:"v_JmXnztjULnQ", title:"AdaBoost Hyperparameters | GridSearchCV in Adaboost", videoId:"JmXnztjULnQ", num:118 },
            { id:"v_7M5oWXCpDEw", title:"Bagging Vs Boosting", videoId:"7M5oWXCpDEw", num:119 },
            { id:"v_fbKz7N92mhQ", title:"Gradient Boosting Explained | How Gradient Boosting Works?", videoId:"fbKz7N92mhQ", num:120 },
            { id:"v_nMNiTZm-qY0", title:"Gradient Boosting Regression Part 2 | Mathematics of Gradient Boosting", videoId:"nMNiTZm-qY0", num:121 },
            { id:"v_4p5EQtyxSyI", title:"Gradient Boosting for Classification | Geometric Intuition", videoId:"4p5EQtyxSyI", num:122 },
            { id:"v_C6aDw4y8qJ0", title:"Introduction to XGBOOST | Machine Learning", videoId:"C6aDw4y8qJ0", num:123 },
            { id:"v_gmp2tS2joaA", title:"XGBoost for Regression | XGBoost Part 2", videoId:"gmp2tS2joaA", num:124 },
            { id:"v_mELtxVUNNrw", title:"XGBoost For Classification", videoId:"mELtxVUNNrw", num:125 },
            { id:"v_0Eo-_5bfers", title:"The Maths Behind XGBoost | Machine Learning", videoId:"0Eo-_5bfers", num:126 },
            { id:"v_O-aDHBGMqXA", title:"Stacking and Blending Ensembles", videoId:"O-aDHBGMqXA", num:127 },
            { id:"v_5shTLzwAdEc", title:"K-Means Clustering Algorithm | Geometric Intuition", videoId:"5shTLzwAdEc", num:128 },
            { id:"v_UPvv9SprgVo", title:"K-Means Clustering Algorithm in Python | Practical Example", videoId:"UPvv9SprgVo", num:129 },
            { id:"v_MFraC1JObUo", title:"K-Means Clustering Algorithm From Scratch In Python", videoId:"MFraC1JObUo", num:130 },
            { id:"v_Ka5i9TVUT-E", title:"Agglomerative Hierarchical Clustering | Python Code Example", videoId:"Ka5i9TVUT-E", num:131 },
            { id:"v_1_bLnsNmhCI", title:"DBSCAN Clustering Algorithms | Density Based Clustering", videoId:"1_bLnsNmhCI", num:132 },
            { id:"v_yh2AKoJCV3k", title:"Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE", videoId:"yh2AKoJCV3k", num:133 },
            { id:"v_E2b3SKMw934", title:"Hyperparameter Tuning using Optuna | Bayesian Optimization", videoId:"E2b3SKMw934", num:134 }
          ]
        },
        {
          id: "s08", title: "ML End-to-End Projects — Krish Naik",
          icon: "fas fa-project-diagram", phase: 3,
          videos: [
            { id:"v_NuwUnRpxq2c", title:"Announcing End To End Data Science Projects In Hindi", videoId:"NuwUnRpxq2c", num:1 },
            { id:"v_8KtY8ihZ8ME", title:"Complete Git And Github Tutorials And Crash Course", videoId:"8KtY8ihZ8ME", num:2 },
            { id:"v_KF-rDqQfqz0", title:"Complete Python Flask Tutorial For Data Science Projects", videoId:"KF-rDqQfqz0", num:3 },
            { id:"v_i7EDCiLJgt0", title:"Tutorial 1 - End To End Data Science Projects - Project Github And Code Setup", videoId:"i7EDCiLJgt0", num:4 },
            { id:"v_NL7Kshd2PW8", title:"Tutorial 2 - Automating Project Structure Using Template.py", videoId:"NL7Kshd2PW8", num:5 },
            { id:"v_IdlH1-JGra4", title:"Tutorial 3 - Cookiecutter Project Templating", videoId:"IdlH1-JGra4", num:6 },
            { id:"v_hj68xarvkmk", title:"Tutorial 4 - Logging And Exception Handling", videoId:"hj68xarvkmk", num:7 },
            { id:"v_fjYnYF_mu78", title:"Tutorial 5 - Data Ingestion, Reading Data From MYSQL", videoId:"fjYnYF_mu78", num:8 },
            { id:"v_RKSY8keIQm8", title:"Tutorial 6 - Data Versioning Using DVC", videoId:"RKSY8keIQm8", num:9 },
            { id:"v_MMSMBMFnRMk", title:"Tutorial 7 - EDA And Feature Engineering", videoId:"MMSMBMFnRMk", num:10 },
            { id:"v_aVR_pwe_aVc", title:"Tutorial 8 - Data Transformation Techniques", videoId:"aVR_pwe_aVc", num:11 },
            { id:"v_UPmWd6EbCsw", title:"Tutorial 9 - Model Training And Hyperparameter Training", videoId:"UPmWd6EbCsw", num:12 },
            { id:"v_qIBacmPg1qY", title:"Tutorial 10 - Integrating With MLFLOW And Dagshub", videoId:"qIBacmPg1qY", num:13 }
          ]
        },
        {
          id: "s_spam", title: "ML Projects (Standalone)",
          icon: "fas fa-code", phase: 3,
          videos: [
            { id:"v_YncZ0WwxyzU", title:"Spam Classifier Project", videoId:"YncZ0WwxyzU", num:1 },
            { id:"v_Nb21OhaW8GY", title:"Chatbot Project", videoId:"Nb21OhaW8GY", num:2 },
            { id:"v_1xtrIEwY_zY", title:"Movie Recommender Project", videoId:"1xtrIEwY_zY", num:3 },
            { id:"v_SQHfry4xmdM", title:"Portfolio Projects Guide", videoId:"SQHfry4xmdM", num:4 }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4 — Deep Learning",
      timeline: "Month 2–4",
      color: "#ec4899",
      sections: [
        {
          id: "s09", title: "100 Days of Deep Learning — CampusX",
          icon: "fas fa-brain", phase: 4,
          videos: [
            { id:"v_2dH_qjc9mFg", title:"100 Days of Deep Learning | Course Announcement", videoId:"2dH_qjc9mFg", num:1 },
            { id:"v_fHF22Wxuyw4", title:"What is Deep Learning? Deep Learning Vs Machine Learning", videoId:"fHF22Wxuyw4", num:2 },
            { id:"v_fne_UE7hDn0", title:"Types of Neural Networks | History of Deep Learning", videoId:"fne_UE7hDn0", num:3 },
            { id:"v_X7iIKPoZ0Sw", title:"What is a Perceptron? Perceptron Vs Neuron", videoId:"X7iIKPoZ0Sw", num:4 },
            { id:"v_Lu2bruOHN6g", title:"Perceptron Trick | How to train a Perceptron", videoId:"Lu2bruOHN6g", num:5 },
            { id:"v_2_gCL5RAkHc", title:"Perceptron Loss Function | Hinge Loss | Binary Cross Entropy", videoId:"2_gCL5RAkHc", num:6 },
            { id:"v_Jp44b27VnOg", title:"Problem with Perceptron", videoId:"Jp44b27VnOg", num:7 },
            { id:"v_H0_3SJh4Rqs", title:"MLP Notation", videoId:"H0_3SJh4Rqs", num:8 },
            { id:"v_qw7wFGgNCSU", title:"Multi Layer Perceptron | MLP Intuition", videoId:"qw7wFGgNCSU", num:9 },
            { id:"v_7MuiScUkboE", title:"Forward Propagation | How a neural network predicts output?", videoId:"7MuiScUkboE", num:10 },
            { id:"v_9wmImImmgcI", title:"Customer Churn Prediction using ANN", videoId:"9wmImImmgcI", num:11 },
            { id:"v_3xPT2Pk0Jds", title:"Handwritten Digit Classification using ANN | MNIST Dataset", videoId:"3xPT2Pk0Jds", num:12 },
            { id:"v_RCmiPBiA4qg", title:"Graduate Admission Prediction using ANN", videoId:"RCmiPBiA4qg", num:13 },
            { id:"v_gb5nm_3jBIo", title:"Loss Functions in Deep Learning", videoId:"gb5nm_3jBIo", num:14 },
            { id:"v_6M1wWQmcUjQ", title:"Backpropagation in Deep Learning | Part 1 | The What?", videoId:"6M1wWQmcUjQ", num:15 },
            { id:"v_ma6hWrU-LaI", title:"Backpropagation Part 2 | The How", videoId:"ma6hWrU-LaI", num:16 },
            { id:"v_6xO-x8y0YSY", title:"Backpropagation Part 3 | The Why", videoId:"6xO-x8y0YSY", num:17 },
            { id:"v_uCrevbBh0zM", title:"Vanishing Gradient Problem in ANN | Exploding Gradient Problem", videoId:"uCrevbBh0zM", num:18 },
            { id:"v_rW0eeTXas4k", title:"MLP Memoization", videoId:"rW0eeTXas4k", num:19 },
            { id:"v_7z6yXpYk7sw", title:"Gradient Descent in Neural Networks | Batch vs Stochastics vs Mini Batch", videoId:"7z6yXpYk7sw", num:20 },
            { id:"v_Ue_6n1yT_R8", title:"How to Improve the Performance of a Neural Network", videoId:"Ue_6n1yT_R8", num:21 },
            { id:"v_Ygvskt5HadI", title:"Early Stopping In Neural Networks", videoId:"Ygvskt5HadI", num:22 },
            { id:"v_mzRO0cVppQ0", title:"Data Scaling in Neural Network | Feature Scaling in ANN", videoId:"mzRO0cVppQ0", num:23 },
            { id:"v_gyTlcHVeBjM", title:"Dropout Layer in Deep Learning | Dropouts in ANN", videoId:"gyTlcHVeBjM", num:24 },
            { id:"v_tgIx04ML7-Y", title:"Dropout Layers in ANN | Code Example | Regression | Classification", videoId:"tgIx04ML7-Y", num:25 },
            { id:"v_4xRonrhtkzc", title:"Regularization in Deep Learning | L2 Regularization | L1 Regularization", videoId:"4xRonrhtkzc", num:26 },
            { id:"v_7LcUkgzx3AY", title:"Activation Functions in Deep Learning | Sigmoid, Tanh and Relu", videoId:"7LcUkgzx3AY", num:27 },
            { id:"v_2OwWs7Hzr9g", title:"Relu Variants Explained | Leaky Relu | Parametric Relu | Elu | Selu", videoId:"2OwWs7Hzr9g", num:28 },
            { id:"v_2MSY0HwH5Ss", title:"Weight Initialization Techniques | What not to do?", videoId:"2MSY0HwH5Ss", num:29 },
            { id:"v_nwVOSgcrbQI", title:"Xavier/Glorat And He Weight Initialization", videoId:"nwVOSgcrbQI", num:30 },
            { id:"v_2AscwXePInA", title:"Batch Normalization in Deep Learning | Batch Learning in Keras", videoId:"2AscwXePInA", num:31 },
            { id:"v_iCTTnQJn50E", title:"Optimizers in Deep Learning | Part 1", videoId:"iCTTnQJn50E", num:32 },
            { id:"v_jAqVuYJ8TP8", title:"Exponentially Weighted Moving Average | Deep Learning", videoId:"jAqVuYJ8TP8", num:33 },
            { id:"v_vVS4csXRlcQ", title:"SGD with Momentum Explained | Optimizers in Deep Learning Part 2", videoId:"vVS4csXRlcQ", num:34 },
            { id:"v_rKG9E6rce1c", title:"Nesterov Accelerated Gradient (NAG) | Optimizers Part 3", videoId:"rKG9E6rce1c", num:35 },
            { id:"v_nqL9xYmhEpg", title:"AdaGrad Explained | Optimizers in Deep Learning Part 4", videoId:"nqL9xYmhEpg", num:36 },
            { id:"v_p0wSmKslWi0", title:"RMSProp Explained | Optimizers in Deep Learning Part 5", videoId:"p0wSmKslWi0", num:37 },
            { id:"v_N5AynalXD9g", title:"Adam Optimizer Explained | Optimizers in Deep Learning Part 5", videoId:"N5AynalXD9g", num:38 },
            { id:"v_oYnyNLj8RMA", title:"Keras Tuner | Hyperparameter Tuning a Neural Network", videoId:"oYnyNLj8RMA", num:39 },
            { id:"v_hDVFXf74P-U", title:"What is Convolutional Neural Network (CNN) | CNN Intuition", videoId:"hDVFXf74P-U", num:40 },
            { id:"v_aslTGS9ef98", title:"CNN Vs Visual Cortex | The Famous Cat Experiment | History of CNN", videoId:"aslTGS9ef98", num:41 },
            { id:"v_cgJx3GvQ5y8", title:"CNN Part 3 | Convolution Operation", videoId:"cgJx3GvQ5y8", num:42 },
            { id:"v_btWE6SsdDZA", title:"Padding & Strides in CNN | CNN Lecture 4", videoId:"btWE6SsdDZA", num:43 },
            { id:"v_DwmGefkowCU", title:"Pooling Layer in CNN | MaxPooling in Convolutional Neural Network", videoId:"DwmGefkowCU", num:44 },
            { id:"v_ewsvsJQOuTI", title:"CNN Architecture | LeNet-5 Architecture", videoId:"ewsvsJQOuTI", num:45 },
            { id:"v_niE5DRKvD_E", title:"Comparing CNN Vs ANN", videoId:"niE5DRKvD_E", num:46 },
            { id:"v_RvCCFttGFMY", title:"Backpropagation in CNN | Part 1", videoId:"RvCCFttGFMY", num:47 },
            { id:"v_OoSDzOodY3Y", title:"CNN Backpropagation Part 2", videoId:"OoSDzOodY3Y", num:48 },
            { id:"v_0K4J_PTgysc", title:"Cat Vs Dog Image Classification Project | CNN Project", videoId:"0K4J_PTgysc", num:49 },
            { id:"v_sM2C-SsREgM", title:"Data Augmentation in Deep Learning | CNN", videoId:"sM2C-SsREgM", num:50 },
            { id:"v_0MVXteg7TB4", title:"Pretrained models in CNN | ImageNET Dataset | ILSVRC", videoId:"0MVXteg7TB4", num:51 },
            { id:"v_WJysB1RK2vM", title:"What does a CNN see? | Visualizing CNN Filters and Feature Maps", videoId:"WJysB1RK2vM", num:52 },
            { id:"v_WWcgHjuKVqA", title:"What is Transfer Learning? | Fine Tuning Vs Feature Extraction", videoId:"WWcgHjuKVqA", num:53 },
            { id:"v_OvQQP1QVru8", title:"Keras Functional Model | How to build non-linear Neural Networks?", videoId:"OvQQP1QVru8", num:54 },
            { id:"v_4KpRP-YUw6c", title:"Why RNNs are needed | RNNs Vs ANNs | RNN Part 1", videoId:"4KpRP-YUw6c", num:55 },
            { id:"v_BjWqCcbusMM", title:"Recurrent Neural Network | Forward Propagation | Architecture", videoId:"BjWqCcbusMM", num:56 },
            { id:"v_JgnbwKnHMZQ", title:"RNN Sentiment Analysis | RNN Code Example in Keras", videoId:"JgnbwKnHMZQ", num:57 },
            { id:"v_TkOBxzhIySg", title:"Types of RNN | Many to Many | One to Many | Many to One RNNs", videoId:"TkOBxzhIySg", num:58 },
            { id:"v_OvCz1acvt-k", title:"How Backpropagation works in RNN | Backpropagation Through Time", videoId:"OvCz1acvt-k", num:59 },
            { id:"v_AWHSZzp96kM", title:"Problems with RNN", videoId:"AWHSZzp96kM", num:60 },
            { id:"v_z7IPBg6MyrU", title:"LSTM | Long Short Term Memory | Part 1 | The What?", videoId:"z7IPBg6MyrU", num:61 },
            { id:"v_Akv3poqqwI4", title:"LSTM Architecture | Part 2 | The How?", videoId:"Akv3poqqwI4", num:62 },
            { id:"v_fiqo6uPCJVI", title:"LSTM | Part 3 | Next Word Predictor", videoId:"fiqo6uPCJVI", num:63 },
            { id:"v_QQfZAoNGQmE", title:"Gated Recurrent Unit | Deep Learning | GRU", videoId:"QQfZAoNGQmE", num:64 },
            { id:"v_mlDkTrlLaio", title:"Deep RNNs | Stacked RNNs | Stacked LSTMs | Stacked GRUs", videoId:"mlDkTrlLaio", num:65 },
            { id:"v_k2NSm3MNdYg", title:"Bidirectional RNN | BiLSTM | Bidirectional LSTM | Bidirectional GRU", videoId:"k2NSm3MNdYg", num:66 },
            { id:"v_8fX3rOjTloc", title:"The Epic History of Large Language Models (LLMs)", videoId:"8fX3rOjTloc", num:67 },
            { id:"v_KiL74WsgxoA", title:"Encoder Decoder | Sequence-to-Sequence Architecture", videoId:"KiL74WsgxoA", num:68 },
            { id:"v_rj5V6q6-XUM", title:"Attention Mechanism in 1 video | Seq2Seq Networks", videoId:"rj5V6q6-XUM", num:69 },
            { id:"v_0hZT4_fHfNQ", title:"Bahdanau Attention Vs Luong Attention", videoId:"0hZT4_fHfNQ", num:70 },
            { id:"v_BjRVS2wTtcA", title:"Introduction to Transformers | Transformers Part 1", videoId:"BjRVS2wTtcA", num:71 },
            { id:"v_XnGGmvpDLA0", title:"What is Self Attention | Transformers Part 2", videoId:"XnGGmvpDLA0", num:72 },
            { id:"v_-tCKPl_8Xb8", title:"Self Attention in Transformers | Simple Explanation with Code!", videoId:"-tCKPl_8Xb8", num:73 },
            { id:"v_r7mAt0iVqwo", title:"Scaled Dot Product Attention | Why do we scale Self Attention?", videoId:"r7mAt0iVqwo", num:74 },
            { id:"v_5ZgGuujZSbs", title:"Self Attention Geometric Intuition | How to Visualize Self Attention", videoId:"5ZgGuujZSbs", num:75 },
            { id:"v_o4ZVA0TuDRg", title:"Why is Self Attention called 'Self'? | Self Attention Vs Luong Attention", videoId:"o4ZVA0TuDRg", num:76 },
            { id:"v_bX2QwpjsmuA", title:"What is Multi-head Attention in Transformers", videoId:"bX2QwpjsmuA", num:77 },
            { id:"v_GeoQBNNqIbM", title:"Positional Encoding in Transformers", videoId:"GeoQBNNqIbM", num:78 },
            { id:"v_qti0QPdaelg", title:"Layer Normalization in Transformers | Layer Norm Vs Batch Norm", videoId:"qti0QPdaelg", num:79 },
            { id:"v_Vs87qcdm8l0", title:"Transformer Architecture | Part 1 Encoder Architecture", videoId:"Vs87qcdm8l0", num:80 },
            { id:"v_m6onaKFzF94", title:"Masked Self Attention | Masked Multi-head Attention | Transformer Decoder", videoId:"m6onaKFzF94", num:81 },
            { id:"v_smOnJtCevoU", title:"Cross Attention in Transformers", videoId:"smOnJtCevoU", num:82 },
            { id:"v_DI2_hrAulYo", title:"Transformer Decoder Architecture | Deep Learning", videoId:"DI2_hrAulYo", num:83 },
            { id:"v_FtsMOzlwxws", title:"Transformer Inference | How Inference is done in Transformer?", videoId:"FtsMOzlwxws", num:84 }
          ]
        },
        {
          id: "s10", title: "TensorFlow / Keras — CodeWithHarry",
          icon: "fas fa-network-wired", phase: 4,
          videos: [
            { id:"v_Mubj_fqiAv8", title:"Introduction | Deep Learning Tutorial 1 (Tensorflow Tutorial)", videoId:"Mubj_fqiAv8", num:1 },
            { id:"v_yfsTZbwgMSE", title:"Why deep learning is becoming so popular? | Deep Learning Tutorial 2", videoId:"yfsTZbwgMSE", num:2 },
            { id:"v_VhRtaziEWd4", title:"What is a neuron? | Deep Learning Tutorial 3", videoId:"VhRtaziEWd4", num:3 },
            { id:"v_ER2It2mIagI", title:"Neural Network Simply Explained | Deep Learning Tutorial 4", videoId:"ER2It2mIagI", num:4 },
            { id:"v_VC-EliTgMEM", title:"Install tensorflow 2.0 | Deep Learning Tutorial 5", videoId:"VC-EliTgMEM", num:5 },
            { id:"v_z-ZR_8BZ1wQ", title:"Pytorch vs Tensorflow vs Keras | Deep Learning Tutorial 6", videoId:"z-ZR_8BZ1wQ", num:6 },
            { id:"v_iqQgED9vV7k", title:"Neural Network For Handwritten Digits Classification | Deep Learning Tutorial 7", videoId:"iqQgED9vV7k", num:7 },
            { id:"v_icZItWxw7AI", title:"Activation Functions | Deep Learning Tutorial 8", videoId:"icZItWxw7AI", num:8 },
            { id:"v_cT4pQT5Da0Q", title:"Derivatives | Deep Learning Tutorial 9", videoId:"cT4pQT5Da0Q", num:9 },
            { id:"v_Wibxjrxf5ko", title:"Matrix Basics | Deep Learning Tutorial 10", videoId:"Wibxjrxf5ko", num:10 },
            { id:"v_E1yyaLRUnLo", title:"Loss or Cost Function | Deep Learning Tutorial 11", videoId:"E1yyaLRUnLo", num:11 },
            { id:"v_pXGBHV3y8rs", title:"Gradient Descent For Neural Network | Deep Learning Tutorial 12", videoId:"pXGBHV3y8rs", num:12 },
            { id:"v_PQCE9ChuIDY", title:"Implement Neural Network In Python | Deep Learning Tutorial 13", videoId:"PQCE9ChuIDY", num:13 },
            { id:"v_IU5fuoYBTAM", title:"Stochastic GD vs Batch GD vs Mini Batch GD | DL Tutorial 14", videoId:"IU5fuoYBTAM", num:14 },
            { id:"v_5ogmEkujoqE", title:"Chain Rule | Deep Learning Tutorial 15", videoId:"5ogmEkujoqE", num:15 },
            { id:"v_9SdLOcGnebU", title:"Tensorboard Introduction | Deep Learning Tutorial 16", videoId:"9SdLOcGnebU", num:16 },
            { id:"v_YmDaqXMIoeY", title:"GPU bench-marking with image classification | Deep Learning Tutorial 17", videoId:"YmDaqXMIoeY", num:17 },
            { id:"v_MSBY28IJ47U", title:"Customer churn prediction using ANN | Deep Learning Tutorial 18", videoId:"MSBY28IJ47U", num:18 },
            { id:"v_2osIZ-dSPGE", title:"Precision, Recall, F1 score | Deep Learning Tutorial 19", videoId:"2osIZ-dSPGE", num:19 },
            { id:"v_lcI8ukTUEbo", title:"Dropout Regularization | Deep Learning Tutorial 20", videoId:"lcI8ukTUEbo", num:20 },
            { id:"v_JnlM4yLFNuo", title:"Handling imbalanced dataset | Deep Learning Tutorial 21", videoId:"JnlM4yLFNuo", num:21 },
            { id:"v_aDpnaxPAmtU", title:"Applications of computer vision | Deep Learning Tutorial 22", videoId:"aDpnaxPAmtU", num:22 },
            { id:"v_zfiSAzpy9NM", title:"Simple explanation of convolutional neural network | Deep Learning Tutorial 23", videoId:"zfiSAzpy9NM", num:23 },
            { id:"v_7HPwo4wnJeA", title:"Image classification using CNN (CIFAR10 dataset) | Deep Learning Tutorial 24", videoId:"7HPwo4wnJeA", num:24 },
            { id:"v_oDAPkZ53zKk", title:"Convolution padding and stride | Deep Learning Tutorial 25", videoId:"oDAPkZ53zKk", num:25 },
            { id:"v_mTVf7BN7S8w", title:"Data augmentation to address overfitting | Deep Learning Tutorial 26", videoId:"mTVf7BN7S8w", num:26 },
            { id:"v_LsdxvjLWkIY", title:"Transfer Learning | Deep Learning Tutorial 27", videoId:"LsdxvjLWkIY", num:27 },
            { id:"v_taC5pMCm70U", title:"Image classification vs Object detection vs Image Segmentation | Deep Learning 28", videoId:"taC5pMCm70U", num:28 },
            { id:"v_SfqN-Hc5two", title:"Popular datasets for computer vision | Deep Learning 29", videoId:"SfqN-Hc5two", num:29 },
            { id:"v_AimW3j7M2Uw", title:"Sliding Window Object Detection | Deep Learning Tutorial 30", videoId:"AimW3j7M2Uw", num:30 },
            { id:"v_ag3DLKsl2vk", title:"What is YOLO algorithm? | Deep Learning Tutorial 31", videoId:"ag3DLKsl2vk", num:31 },
            { id:"v_IfRMV2MY9n0", title:"Object detection using YOLO v4 | Deep Learning Tutorial 32", videoId:"IfRMV2MY9n0", num:32 },
            { id:"v_Y2wfIKQyd1I", title:"What is Recurrent Neural Network (RNN)? Deep Learning Tutorial 33", videoId:"Y2wfIKQyd1I", num:33 },
            { id:"v_EzsXi4WzelI", title:"Types of RNN | Recurrent Neural Network Types | Deep Learning Tutorial 34", videoId:"EzsXi4WzelI", num:34 },
            { id:"v_qowp6SQ9_Oo", title:"Vanishing and exploding gradients | Deep Learning Tutorial 35", videoId:"qowp6SQ9_Oo", num:35 },
            { id:"v_LfnrRPFhkuY", title:"Simple Explanation of LSTM | Deep Learning Tutorial 36", videoId:"LfnrRPFhkuY", num:36 },
            { id:"v_tOuXgORsXJ4", title:"Simple Explanation of GRU | Deep Learning Tutorial 37", videoId:"tOuXgORsXJ4", num:37 },
            { id:"v_atYPhweJ7ao", title:"Bidirectional RNN | Deep Learning Tutorial 38", videoId:"atYPhweJ7ao", num:38 },
            { id:"v_sZGuyTLjsco", title:"Converting words to numbers, Word Embeddings | Deep Learning Tutorial 39", videoId:"sZGuyTLjsco", num:39 },
            { id:"v_Fuw0wv3X-0o", title:"Word embedding using keras embedding layer | Deep Learning Tutorial 40", videoId:"Fuw0wv3X-0o", num:40 },
            { id:"v_hQwFeIupNP0", title:"What is Word2Vec? A Simple Explanation | Deep Learning Tutorial 41", videoId:"hQwFeIupNP0", num:41 },
            { id:"v_Q2NtCcqmIww", title:"Word2Vec Part 2 | Implement word2vec in gensim | Deep Learning Tutorial 42", videoId:"Q2NtCcqmIww", num:42 },
            { id:"v_95OyAjIZAbs", title:"Distributed Training On NVIDIA DGX Station A100 | Deep Learning Tutorial 43", videoId:"95OyAjIZAbs", num:43 },
            { id:"v_VFEOskzhhbc", title:"Tensorflow Input Pipeline | tf Dataset | Deep Learning Tutorial 44", videoId:"VFEOskzhhbc", num:44 },
            { id:"v_MLEKEplgCas", title:"Optimize Tensorflow Pipeline Performance | Deep Learning Tutorial 45", videoId:"MLEKEplgCas", num:45 },
            { id:"v_7kLi8u2dJz0", title:"What is BERT? | Deep Learning Tutorial 46", videoId:"7kLi8u2dJz0", num:46 },
            { id:"v_hOCDJyZ6quA", title:"Text Classification Using BERT & Tensorflow | Deep Learning Tutorial 47", videoId:"hOCDJyZ6quA", num:47 },
            { id:"v_P-5sMcpTE0g", title:"tf serving tutorial | tensorflow serving | Deep Learning Tutorial 48", videoId:"P-5sMcpTE0g", num:48 },
            { id:"v_v1oHf1KV6kM", title:"Quantization in deep learning | Deep Learning Tutorial 49", videoId:"v1oHf1KV6kM", num:49 },
            { id:"v_ZhAz268Hdpw", title:"Transformers Explained | Simple Explanation of Transformers", videoId:"ZhAz268Hdpw", num:50 },
            { id:"v_dGtDTjYs3xc", title:"Deep learning project end to end | Potato Disease Classification - 1", videoId:"dGtDTjYs3xc", num:51 },
            { id:"v_bns5ELvbzVk", title:"Potato Disease Classification - 2: Data collection, preprocessing", videoId:"bns5ELvbzVk", num:52 },
            { id:"v_ZN6P_GEJ7lk", title:"Potato Disease Classification - 3: Model Building", videoId:"ZN6P_GEJ7lk", num:53 },
            { id:"v_t6NI0u_lgNo", title:"Potato Disease Classification - 4: FastAPI/tf serving Backend", videoId:"t6NI0u_lgNo", num:54 },
            { id:"v_uldlsT98Bbs", title:"Potato Disease Classification - 5: Website (In React JS)", videoId:"uldlsT98Bbs", num:55 },
            { id:"v_DQFerxe6o5g", title:"Potato Disease Classification - 6: ImageDataGenerator API", videoId:"DQFerxe6o5g", num:56 },
            { id:"v_ra4j7yDlakQ", title:"Potato Disease Classification - 7: Model Deployment To GCP", videoId:"ra4j7yDlakQ", num:57 },
            { id:"v_mSf0j8qkkFI", title:"Potato Disease Classification - 8: Mobile App in React Native", videoId:"mSf0j8qkkFI", num:58 }
          ]
        },
        {
          id: "s11", title: "PyTorch Full Course — CampusX",
          icon: "fas fa-fire", phase: 4,
          videos: [
            { id:"v_QZsguRbcOBM", title:"PyTorch for Beginners | Introduction to PyTorch | Video 1", videoId:"QZsguRbcOBM", num:1 },
            { id:"v_mDsFsnw3SK4", title:"Tensors in PyTorch | Video 2", videoId:"mDsFsnw3SK4", num:2 },
            { id:"v_BECZ0UB5AR0", title:"PyTorch Autograd | Video 3", videoId:"BECZ0UB5AR0", num:3 },
            { id:"v_MKxEbbKpL5Q", title:"PyTorch Training Pipeline | Video 4", videoId:"MKxEbbKpL5Q", num:4 },
            { id:"v_CAgWNxlmYsc", title:"PyTorch NN Module | Video 5", videoId:"CAgWNxlmYsc", num:5 },
            { id:"v_RH6DeE3bY6I", title:"Dataset & DataLoader Class in PyTorch | Video 6", videoId:"RH6DeE3bY6I", num:6 },
            { id:"v_6EJaHBJhwDs", title:"Building a ANN using PyTorch | Video 7", videoId:"6EJaHBJhwDs", num:7 },
            { id:"v_CabHrf9eOVs", title:"Neural Network Training on GPU | Video 8", videoId:"CabHrf9eOVs", num:8 },
            { id:"v_7smLlJ8oj4o", title:"Optimizing the Neural Network | Video 9", videoId:"7smLlJ8oj4o", num:9 },
            { id:"v_Y3s-wBBLj_o", title:"Hyperparameter Tuning the ANN using Optuna | Video 10", videoId:"Y3s-wBBLj_o", num:10 },
            { id:"v_hkiBZLRFvO4", title:"Building a CNN using PyTorch | Video 11", videoId:"hkiBZLRFvO4", num:11 },
            { id:"v_aPu6a5htRXM", title:"Transfer Learning using PyTorch | Video 12", videoId:"aPu6a5htRXM", num:12 },
            { id:"v_xjzWrPQ66VQ", title:"RNN using PyTorch | Question Answering System | Video 13", videoId:"xjzWrPQ66VQ", num:13 },
            { id:"v_FAUha5mYSGQ", title:"Next Word Predictor using Pytorch | LSTM using PyTorch | Video 14", videoId:"FAUha5mYSGQ", num:14 }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Phase 5 — Specialization",
      timeline: "Month 4+",
      color: "#3b82f6",
      sections: [
        {
          id: "s_cv", title: "Computer Vision + OpenCV",
          icon: "fas fa-eye", phase: 5,
          videos: [
            { id:"v_P4Z8_qe2Cu0", title:"OpenCV Python Course — Full Tutorial", videoId:"P4Z8_qe2Cu0", num:1 }
          ]
        },
        {
          id: "s_yolo", title: "YOLO Object Detection",
          icon: "fas fa-crosshairs", phase: 5,
          videos: [
            { id:"v_ag3DLKsl2vk_yolo", title:"YOLO Object Detection Course", videoId:"ag3DLKsl2vk", num:1 }
          ]
        },
        {
          id: "s12", title: "NLP",
          icon: "fas fa-language", phase: 5,
          videos: [
            { id:"v_zlUpTlaxAKI", title:"Introduction to NLP | NLP Lecture 1", videoId:"zlUpTlaxAKI", num:1 },
            { id:"v_29qyNyNkLHs", title:"End to End NLP Pipeline | NLP Pipeline | Lecture 2", videoId:"29qyNyNkLHs", num:2 },
            { id:"v_6C0sLtw5ctc", title:"Text Preprocessing | NLP Course Lecture 3", videoId:"6C0sLtw5ctc", num:3 },
            { id:"v_vo6gQz5lYRI", title:"Text Representation | NLP Lecture 4 | Bag of Words | Tf-Idf", videoId:"vo6gQz5lYRI", num:4 },
            { id:"v_DDfLc5AHoJI", title:"Word2vec Complete Tutorial | CBOW and Skip-gram", videoId:"DDfLc5AHoJI", num:5 },
            { id:"v_Qbd7U9F0QQ8", title:"Text Classification | NLP Lecture 6 | Average Word2Vec", videoId:"Qbd7U9F0QQ8", num:6 },
            { id:"v_269IGagoJfs", title:"POS Tagging | Part of Speech Tagging in NLP | Hidden Markov Models", videoId:"269IGagoJfs", num:7 },
            { id:"v_1fvQU5yPjFs", title:"Duplicate Question Pairs | Quora Question Pairs | NLP Projects", videoId:"1fvQU5yPjFs", num:8 }
          ]
        },
        {
          id: "s13", title: "Generative AI + LLM + Prompt Engineering",
          icon: "fas fa-magic", phase: 5,
          videos: [
            { id:"v_CbpsDMwFG2g", title:"OpenAI API With Python Tutorial 1 - ChatCompletion API", videoId:"CbpsDMwFG2g", num:1 },
            { id:"v_zRdzLfoTwvQ", title:"The Power Of Function Calling Using OpenAI API Tutorial #2", videoId:"zRdzLfoTwvQ", num:2 }
          ]
        },
        {
          id: "s14", title: "LangChain",
          icon: "fas fa-link", phase: 5,
          videos: [
            { id:"v_KmQOlg5YfU0", title:"Fresh And Updated Langchain Series - Understanding Langchain Ecosystem", videoId:"KmQOlg5YfU0", num:1 },
            { id:"v_AOI7IVE3CMw", title:"1 - Lets Learn About Langchain - What We Will Learn And Demo Projects", videoId:"AOI7IVE3CMw", num:2 },
            { id:"v_5CJA1Hbutqc", title:"2 - Building Chatbot Using Paid And Open Source LLMs using Langchain", videoId:"5CJA1Hbutqc", num:3 },
            { id:"v_XWB5DXP-DO8", title:"3 - Production Grade Deployment LLM As API With Langchain And FastAPI", videoId:"XWB5DXP-DO8", num:4 },
            { id:"v_9Thc6hRw2Gs", title:"4 - Getting Started With RAG Pipeline Using Langchain Chromadb And FAISS", videoId:"9Thc6hRw2Gs", num:5 },
            { id:"v_tIwi92nkcu0", title:"5 - Advanced RAG Q&A Chatbot With Chain And Retrievers Using Langchain", videoId:"tIwi92nkcu0", num:6 },
            { id:"v_2_gSXyt2108", title:"6 - Building Advanced RAG Q&A Project With Multiple Data Sources", videoId:"2_gSXyt2108", num:7 },
            { id:"v_QQdiHrIc84o", title:"7 - End To End Advanced RAG Project using Open Source LLM Models", videoId:"QQdiHrIc84o", num:8 },
            { id:"v_RZ2Vu8z-P1Q", title:"8 - Building Gen AI Powered App Using Langchain And Huggingface", videoId:"RZ2Vu8z-P1Q", num:9 },
            { id:"v_-PSq_ilkvwI", title:"9 - End To End Powerful Document Q&A Chatbot using Llama3", videoId:"-PSq_ilkvwI", num:10 },
            { id:"v_8Vq4K1EGq2g", title:"Advanced Q&A Chatbot Using Ragstack With vector-enabled Astra DB", videoId:"8Vq4K1EGq2g", num:11 },
            { id:"v_9LewL1bUS6g", title:"Getting Started with On-Device AI: RAG using ObjectBox Vector Database", videoId:"9LewL1bUS6g", num:12 },
            { id:"v_TcvI-Nnebow", title:"Building RAG With OpenAI GPT-4o(omni) Model Using Objectbox", videoId:"TcvI-Nnebow", num:13 },
            { id:"v_T6XhRFeDbPY", title:"Hugging Face x LangChain: A new partner package in LangChain", videoId:"T6XhRFeDbPY", num:14 },
            { id:"v_LOUaom9HZIg", title:"End To End Document Q&A RAG App With Gemma And Groq API", videoId:"LOUaom9HZIg", num:15 },
            { id:"v_CK0ExcCWDP4", title:"Hybrid Search RAG With Langchain And Pinecone Vector DB", videoId:"CK0ExcCWDP4", num:16 },
            { id:"v_ruiLq0OzjkI", title:"Guardrails with LangChain: A Complete Crash Course for Building Safe AI Agents", videoId:"ruiLq0OzjkI", num:17 }
          ]
        },
        {
          id: "s15", title: "Flask / FastAPI for ML — CampusX",
          icon: "fas fa-server", phase: 5,
          videos: [
            { id:"v_WJKsPchji0Q", title:"What is an API? | Introduction to APIs | FAST API for Machine Learning", videoId:"WJKsPchji0Q", num:1 },
            { id:"v_lXx-_1r0Uss", title:"FastAPI Philosophy | How to setup FastAPI | Video 2", videoId:"lXx-_1r0Uss", num:2 },
            { id:"v_O8KrViWNhOM", title:"HTTP Methods in FastAPI | Video 3", videoId:"O8KrViWNhOM", num:3 },
            { id:"v_VVVKEfhXCQ4", title:"Path & Query Params in FastAPI | Video 4", videoId:"VVVKEfhXCQ4", num:4 },
            { id:"v_lRArylZCeOs", title:"Pydantic Crash Course | Data Validation in Python", videoId:"lRArylZCeOs", num:5 },
            { id:"v_sw8V7mLl3OI", title:"Post Request in FastAPI | What is Request Body? | Video 5", videoId:"sw8V7mLl3OI", num:6 },
            { id:"v_XVu22pTwWE8", title:"PUT & DELETE in FastAPI | Video 6", videoId:"XVu22pTwWE8", num:7 },
            { id:"v_JdDoMi_vqbM", title:"Serving ML Models with FastAPI | Video 7", videoId:"JdDoMi_vqbM", num:8 },
            { id:"v_M17qwKnmG38", title:"Improving the FastAPI API | Video 8", videoId:"M17qwKnmG38", num:9 },
            { id:"v_GToyQTGDOS4", title:"Docker for Machine Learning | Docker Crash Course", videoId:"GToyQTGDOS4", num:10 },
            { id:"v_jlLs6hfAga4", title:"FastAPI + Docker Tutorial for Beginners", videoId:"jlLs6hfAga4", num:11 },
            { id:"v_X0lnToYN21k", title:"How to Deploy a FastAPI API on AWS | Video 10", videoId:"X0lnToYN21k", num:12 },
            { id:"v_VjPrWc0NQP0", title:"FastAPI Course Launch", videoId:"VjPrWc0NQP0", num:13 }
          ]
        },
        {
          id: "s_deploy", title: "Deployment (Standalone)",
          icon: "fas fa-cloud-upload-alt", phase: 5,
          videos: [
            { id:"v_VqgUkExPvLY", title:"Streamlit Course", videoId:"VqgUkExPvLY", num:1 },
            { id:"v_gwWKnnCMQ5c", title:"Git & GitHub Course", videoId:"gwWKnnCMQ5c", num:2 }
          ]
        }
      ]
    }
  ]
};

// Build a flat map of all videos for quick lookup
const VIDEO_MAP = {};
ROADMAP_DATA.phases.forEach(phase => {
  phase.sections.forEach(section => {
    section.videos.forEach(video => {
      VIDEO_MAP[video.id] = {
        ...video,
        sectionId: section.id,
        sectionTitle: section.title,
        phaseId: phase.id,
        phaseTitle: phase.title,
        phaseColor: phase.color
      };
    });
  });
});

// Total count
const TOTAL_VIDEOS = Object.keys(VIDEO_MAP).length;

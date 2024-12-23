import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
function PieChart({ value, labels }) {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value, // Giá trị các phần
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ]
      },
    ],
  };
  
  // Cấu hình tùy chọn cho biểu đồ
  const options = {
    responsive: true, // Biểu đồ tự động thay đổi kích thước
    plugins: {
      legend: {
        display: false, // Vị trí của chú thích
      },
      tooltip: {
        enabled: false, // Hiển thị tooltip khi hover
      },
      datalabels: {
        color: "#fff", // Màu chữ
        anchor: "center", // Vị trí của nhãn
        align: "center",
        formatter: (value, context) => {
          // Lấy label từ dữ liệu
          const label = context.chart.data.labels[context.dataIndex];
          return label; // Hiển thị label thay vì giá trị
        },
        font: {
          size: 10, // Kích thước chữ
          weight: "bold",
        },
      },
    },
    animation: false
  };

  return (
    <Pie data={data} options={options} />
  );
}

export default PieChart;
import Chart from "react-apexcharts";
import useUsers from "../../Hooks/useUsers";
import UseProductsBySecondaryCategory from "../../Hooks/UseProductsBySecondaryCategory";

import team from '../../../public/team.png';
import packages from '../../../public/package.png';
import cubes from '../../../public/cubes.png';
import Loader from "../../Components/Loader/Loader";



const Overview = () => {
    const [usersData, isUsersDataLoading] = useUsers();
    const [products, isProductsLoading] = UseProductsBySecondaryCategory({
      category: "iron"
    });
    if(isProductsLoading || isUsersDataLoading){
      return <Loader></Loader>
    }
        
      var options = {
        chart: {
        height: 380,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'month',
        categories: ["jan", "Feb", "Mar", "April", "May", "Jun", "july", "Aug", "sep", "Oct", "Nov", "Dec" ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };
      const series = [{
        name: 'Product selled',
        data: [31, 40, 28, 51, 42, 109, 100, 110, 90, 140, 150, 155]
      }, {
        name: 'Product canceled',
        data: [11, 32, 45, 32, 34, 52, 70, 150, 50, 100, 57, 70]
      }]

      var optionsForPie = {
        chart: {
        width: 380,
        type: 'donut',
      },
      labels: ["Phone", "Web", "Web-App", "Mac"],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 350
          },
          legend: {
            height: 30,
          }
        }
      }],
      legend: {
        position: 'bottom',
        offsetY: 0,
        height: 18,
      }
      };
      const seriseForDonut = [44, 55, 13, 22];
    return (
        <div className="w-full px-2 md:px-8">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
           <div className="w-full p-3 md:p-4 xl:p-8 rounded-xl shadow-sm flex justify-start items-center gap-4 bg-[#008ffb] !text-white">
            <img className="w-10 md:w-12 xl:w-16" src={cubes} alt="" />
            <div>
            <h2 className="text-white font-bold xl:text-xl">Total Products - {products?.length}</h2>
            <h2 className="text-white font-bold xl:text-lg">Hasnat Hasan</h2>
            </div>
           </div>
           <div className="w-full p-3 md:p-4 xl:p-8 rounded-xl shadow-sm flex justify-start items-center gap-4  bg-[#02e296]">
            <img className="w-10 md:w-12 xl:w-16" src={packages} alt="" />
            <div>
            <h2 className="text-white font-bold xl:text-xl">Total Orders - {products?.length}</h2>
            <h2 className="text-white font-bold xl:text-lg">Hasnat Hasan</h2>
            </div>
           </div>
           <div className="w-full col-span-2 shadow-sm lg:col-span-1 p-3 md:p-4 xl:p-8 flex justify-center items-center gap-4 rounded-xl bg-[#ff4560]">
            <img className="w-10 md:w-12 xl:w-16" src={team} alt="" />
            <div>
            <h2 className="text-white font-bold xl:text-xl">Total Users {usersData?.length}</h2>
            <h2 className="text-white font-bold xl:text-lg">Hasnat Hasan</h2>
            </div>
           </div>
           </div>
           <div></div>
           <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
           <div className="bg-white p-3 md:col-span-2 rounded-md shadow-md">
            <h3 className="font-semibold p-2 text-gray-800">Product Selling Update</h3>
           <Chart
              options={options}
              series={series}
              type="area"
              width="100%"
            />
           </div>
           <div className="relative min-h-[350px]">
           <h3 className="font-semibold absolute top-2 left-2 z-10 p-2 text-gray-800">Total Users by devices</h3>
           <div className="bg-white flex justify-center relative w-full h-full items-center rounded-md shadow-md">
           <Chart
              options={optionsForPie}
              series={seriseForDonut}
              type="donut"
              width="120%"
            />
           </div>
           </div>

           </div>

        </div>
    );
};

export default Overview;
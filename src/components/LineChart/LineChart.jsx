import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const students = [
        { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Student 2", math: 78, physics: 85, chemistry: 90 },
        { id: 3, name: "Student 3", math: 92, physics: 88, chemistry: 94 },
        { id: 4, name: "Student 4", math: 65, physics: 72, chemistry: 68 },
        { id: 5, name: "Student 5", math: 88, physics: 90, chemistry: 87 },
        { id: 6, name: "Student 6", math: 75, physics: 80, chemistry: 78 },
        { id: 7, name: "Student 7", math: 94, physics: 92, chemistry: 96 },
        { id: 8, name: "Student 8", math: 70, physics: 68, chemistry: 72 },
        { id: 9, name: "Student 9", math: 82, physics: 75, chemistry: 80 },
        { id: 10, name: "Student 10", math: 89, physics: 86, chemistry: 88 }
      ];
      
      
      
      
      

    return (
        <div>
            <LChart width={800} height={400} data={students}>
             <XAxis dataKey= "name"/>
             <YAxis></YAxis>
             <Line dataKey='math'></Line>
             <Line dataKey='physics' stroke='yellow'></Line>
             <Line dataKey='chemistry' stroke='red'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;
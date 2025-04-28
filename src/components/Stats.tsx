
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Stats = () => {
  const stats = [
    {
      title: "Data Analysis",
      value: "5+",
      description: "Years Experience",
      icon: "📊"
    },
    {
      title: "Projects",
      value: "30+",
      description: "Completed",
      icon: "🚀"
    },
    {
      title: "Visualization",
      value: "100+",
      description: "Dashboards",
      icon: "📈"
    },
    {
      title: "SQL Queries",
      value: "1000+",
      description: "Optimized",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md bg-white dark:bg-gray-800 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <CardTitle>{stat.title}</CardTitle>
                <CardDescription>{stat.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

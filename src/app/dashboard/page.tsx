'use client';

import { Bell, ChevronDown, CreditCard, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Spinner from '@/components/spinner';

const transactions = [
  {
    id: '1',
    type: 'Cobro exitoso',
    date: '2024-01-09',
    account: 'Luis González',
    amount: '$50,000',
  },
  {
    id: '2',
    type: 'Cobro exitoso',
    date: '2024-01-09',
    account: 'Ana María Pérez',
    amount: '$4,000',
  },
  {
    id: '3',
    type: 'En proceso',
    date: '2024-01-09',
    account: 'Ana María Pérez',
    amount: '$30,000',
  },
];

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        console.log(`accessToken: ${accessToken}`);
        if (!accessToken || accessToken === '' || accessToken === null) {
          router.push('/login');
          return;
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        router.push('/login/phone');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login/phone');
  };
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <div className="font-bold text-2xl text-primary">Vendly</div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden lg:block">
          <nav className="flex flex-col gap-2 p-4">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <DollarSign className="h-4 w-4" />
              Resumen de transacciones
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <CreditCard className="h-4 w-4" />
              Pagos y verificaciones
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Clientes
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              Bienvenido a tu cuenta, Pepito
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Filtrar
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Cobros con Datafonía</DropdownMenuItem>
                <DropdownMenuItem>Cobros con Link de pago</DropdownMenuItem>
                <DropdownMenuItem>Cobros con Nequi</DropdownMenuItem>
                <DropdownMenuItem>Contracargos</DropdownMenuItem>
                <DropdownMenuItem>Todos</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Tus ventas del día</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cobros exitosos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">100</div>
                  <p className="text-xs text-muted-foreground">
                    Total de transacciones
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Valor total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$500,000</div>
                  <p className="text-xs text-muted-foreground">
                    Valor total de cobros exitosos
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Clientes atendidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Clientes facturados hoy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Tus cobros</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transacción</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Cuenta</TableHead>
                      <TableHead className="text-right">Monto</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map(transaction => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.account}</TableCell>
                        <TableCell className="text-right">
                          {transaction.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

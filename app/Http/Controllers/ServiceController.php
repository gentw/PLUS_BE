<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use DB;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

   /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addService(Request $request)
    {   
        //
        Service::create([
            "name" => $request['service']["name"]
        ]);

        return response()->json("success");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fetchService($id)
    {
        //
        $service = Service::where('id', $id)->first();
        return $service;        
    }

    public function fetchServices(Request $request)
    {
        $perPage = $request['perPage'];
        $page = $request['page'];
        $sortBy = $request['sortBy'];
        $sortDesc = $request['sortDesc']; 

        $q = $request['q'];


        $services = DB::table('services')
        ->orderBy($sortBy, $sortDesc ? 'desc' : 'asc')
        ->paginate($perPage, ['*'], 'page', $page);

        $services = $services->items();

        return response()->json([
            "services" => $services,
            "total" => count($services)
        ]);
    }

    public function fetchAllServices()
    {
        $services = Service::all()->map(function($service) {
            return [
                'label' => $service->name,
                'value' => $service->id,
            ];
        });

        return $services;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

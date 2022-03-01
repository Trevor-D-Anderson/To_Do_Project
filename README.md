This guide covers configuration and deployment elements of the ToDo It
app. The app is written using the MERN stack. In this guide we will
outline the configuration options needed to run in your environment, and
provide quick start instructions using NodeJS with the config files we
provide.

# General Information

## Project Name

### Title: ToDo it

### Git HUB Repository [Git Repo](https://github.com/Trevor-D-Anderson/To_Do_Project.git)

# Team Information

This section contains information regarding The **MERN Team** team
members from *Coding Dojo*.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><strong>Team Member
Name</strong></p></td>
<td style="text-align: left;"><p><strong>Email</strong></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Kai Neuhold-Huber, Back-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:kneuholdhuber@gmail.com">kneuholdhuber@gmail.com</a></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Rene Marino, Back-End Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:renemarino93@gmail.com">renemarino93@gmail.com</a></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Darwin Garcia, Front-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:rdgt07@gmail.com">rdgt07@gmail.com</a></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Trevor Anderson, Front-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:tbone101@gmail.com">tbone101@gmail.com</a></p></td>
</tr>
</tbody>
</table>

# ToDoIt Endpoint configuration

## Back-End Routes

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;"><strong>FHIR Setting</strong></th>
<th style="text-align: left;"><strong>Value</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>SMART Launch URI</p></td>
<td style="text-align: left;"><p>&lt;URL of the app&gt;/form/</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Redirect URI</p></td>
<td style="text-align: left;"><p>&lt;URL of the
app&gt;/auth/patient_callback/</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>App Type</p></td>
<td style="text-align: left;"><p>Patient</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>FHIR Spec</p></td>
<td style="text-align: left;"><p>dstu2</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Authorized</p></td>
<td style="text-align: left;"><p>Yes</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Standard Scopes</p></td>
<td style="text-align: left;"><p>Launch, profile, openid, online_access,
launch/patient</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>User Scopes</p></td>
<td style="text-align: left;"><p>user/Patient.read</p></td>
</tr>
</tbody>
</table>

Place warning messages here

## Provider FHIR App

# Configuration
